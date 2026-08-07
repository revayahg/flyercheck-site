// Flyer Analysis Service
// This is a client-side implementation using Tesseract.js for OCR
// For production, move this to a backend API

/** Resolves with '' if `promise` does not settle within `ms` (Tesseract can run long on large images). */
function withTimeout(promise, ms) {
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => {
            console.warn(`OCR exceeded ${ms}ms; continuing without extracted text.`);
            resolve('');
        }, ms);
        promise
            .then((val) => {
                clearTimeout(t);
                resolve(val);
            })
            .catch((err) => {
                clearTimeout(t);
                reject(err);
            });
    });
}

/** Max decoded image size sent to the API (base64 must stay under Vercel's ~4.5MB body). */
const MAX_PAYLOAD_BYTES = Math.floor(2.8 * 1024 * 1024);

// Make function globally available
window.analyzeFlyerWithAI = async function(file, targetAudience, eventCategories) {
    try {
        // Step 1: Compress/resize so phone photos fit the API payload limit
        let processedFile = file;
        const isHeic = file.type === 'image/heic' || file.type === 'image/heif' ||
                      file.type === 'image/x-heic' || file.type === 'image/x-heif' ||
                      file.name?.toLowerCase().endsWith('.heic') || file.name?.toLowerCase().endsWith('.heif');

        if (file.type.startsWith('image/') && !isHeic) {
            try {
                processedFile = await compressToPayloadSize(file);
                if (processedFile.size !== file.size) {
                    console.log(
                        `Image compressed: ${(file.size / 1024 / 1024).toFixed(2)}MB -> ${(processedFile.size / 1024 / 1024).toFixed(2)}MB`
                    );
                }
            } catch (compressError) {
                console.warn('Image compression failed, using original:', compressError);
            }
        }

        if (processedFile.size > MAX_PAYLOAD_BYTES) {
            throw new Error(
                'This image is still too large after compression. Please try a smaller export or a lower-resolution photo.'
            );
        }

        // Step 2: Extract text using Tesseract.js (client-side OCR) - optional, for display
        // Skip OCR for PDFs as Tesseract.js doesn't support them
        let extractedText = '';
        if (!processedFile.type.includes('pdf')) {
            try {
                extractedText = await withTimeout(
                    extractTextWithTesseract(processedFile),
                    15000
                );
            } catch (ocrError) {
                console.warn('OCR failed, continuing without extracted text:', ocrError);
            }
        } else {
            console.log('Skipping OCR for PDF file - Tesseract.js does not support PDFs');
            extractedText = 'PDF file - text extraction skipped (PDFs are analyzed visually by AI)';
        }

        // Step 3: Convert file to base64 for API
        const base64Image = await fileToBase64(processedFile);
        
        // Step 4: Call backend API with OpenAI
        const response = await fetch('/api/analyze-flyer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: base64Image,
                mimeType: processedFile.type,
                targetAudience: targetAudience,
                eventCategories: Array.isArray(eventCategories) ? eventCategories : [eventCategories],
                extractedText: extractedText
            })
        });
        
        if (!response.ok) {
            const rawText = await response.text().catch(() => '');
            let serverMessage = '';
            try {
                const errorData = rawText ? JSON.parse(rawText) : {};
                if (errorData && typeof errorData.error === 'string') {
                    serverMessage = errorData.error.trim();
                }
            } catch {
                /* non-JSON body (e.g. HTML error page) */
            }

            const isGatewayTimeout =
                response.status === 504 ||
                response.status === 524 ||
                rawText.includes('FUNCTION_INVOCATION_TIMEOUT') ||
                rawText.includes('504');

            const errorMessage =
                serverMessage ||
                (response.status === 500 || response.status === 502 || response.status === 503 || isGatewayTimeout
                    ? 'The analysis took too long or the service is temporarily unavailable. Try a smaller image or try again in a moment.'
                    : `Request failed (${response.status}). Please try again.`);

            if (response.status === 413) {
                throw new Error(
                    'This image is still too large after compression. Please try a smaller export or a lower-resolution photo.'
                );
            }

            throw new Error(errorMessage);
        }
        
        const result = await response.json();
        if (result?.success && result.analysis) {
            result.analysis = applyFlyerGate(result.analysis, extractedText);
        }
        return result;
    } catch (error) {
        console.error('Analysis error:', error);
        return {
            success: false,
            error: error.message || 'Failed to analyze flyer'
        };
    }
}

const DIMENSION_KEYS = [
    'visualClarity',
    'messageClarity',
    'brandingConsistency',
    'emotionalAppeal',
    'ctaEffectiveness',
    'audienceFit',
    'technicalQuality',
];

const NON_FLYER_UI_PHRASES = [
    'what we look for',
    'drop or paste your flyer',
    'drop or paste',
    'browse files',
    'png, jpeg, or webp',
    'check another flyer',
    'want to check another',
    'analyzed flyer',
    'analysis results',
    'overall score',
    'dimension scores',
    'text readability',
    'crowd visibility',
    'branding consistency',
    'information hierarchy',
    'flyercheck by revaya',
    'catch the mistake before your audience',
];

const EVENT_SIGNAL_PATTERNS = [
    /\b(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)\b/i,
    /\b\d{1,2}[\/.\-]\d{1,2}([\/.\-]\d{2,4})?\b/,
    /\b\d{1,2}(:\d{2})?\s?(am|pm)\b/i,
    /\b(doors|tickets?|rsvp|venue|tonight|this friday|this saturday|lineup|featuring|presented by)\b/i,
];

function detectNonFlyerFromText(extractedText) {
    const text = String(extractedText || '').toLowerCase().replace(/\s+/g, ' ').trim();
    if (!text || text.length < 12) {
        return {
            notFlyer: false,
            reason: '',
        };
    }

    const chromeHits = NON_FLYER_UI_PHRASES.filter((phrase) => text.includes(phrase));
    if (chromeHits.length >= 2) {
        return {
            notFlyer: true,
            reason: 'This looks like a website or app screenshot, not an event flyer.',
        };
    }

    // Site/product UI screenshots of FlyerCheck itself
    if (
        (text.includes('flyercheck') && text.includes('what we look for')) ||
        (text.includes('flyercheck') && text.includes('browse files')) ||
        (text.includes('catch the mistake') && text.includes('audience'))
    ) {
        return {
            notFlyer: true,
            reason: 'This looks like a screenshot of FlyerCheck (or another website), not an event flyer.',
        };
    }

    return { notFlyer: false, reason: '' };
}

function forceNonFlyerAnalysis(analysis, reason) {
    const lowScores = {};
    const lowFeedback = {};
    for (const key of DIMENSION_KEYS) {
        lowScores[key] = 1;
        lowFeedback[key] =
            `Score: 1/10. Not evaluated as an event flyer — upload a promotional flyer for an event to get useful feedback.`;
    }

    return {
        ...analysis,
        isEventFlyer: false,
        notFlyerReason: reason,
        overallScore: 1,
        scores: lowScores,
        positiveSummary: `This doesn't look like an event flyer. ${reason} FlyerCheck only reviews event promotional graphics — upload the flyer you plan to post (with event details) to get a real analysis.`,
        detailedFeedback: lowFeedback,
        pitfallsFound: [
            'Not an event flyer',
            ...(Array.isArray(analysis.pitfallsFound)
                ? analysis.pitfallsFound.filter((p) => !/not an event flyer/i.test(String(p)))
                : []),
        ],
        strengths: [],
        improvements: [
            'Upload an event flyer: a designed graphic promoting a live event or venue night.',
            ...(Array.isArray(analysis.improvements) ? analysis.improvements.slice(0, 2) : []),
        ],
        recommendations: [
            'Use a PNG, JPEG, or WEBP of the flyer you intend to share — including date, time, venue, and a clear next step when possible.',
        ],
        audienceSpecificTips: 'Audience tips apply once you upload a real event flyer.',
        categorySpecificGuidance: 'Category guidance applies once you upload a real event flyer.',
        encouragement:
            "Upload your event flyer whenever you're ready — we'll review it for clarity, logistics, and conversion.",
    };
}

/**
 * Client-side flyer gate: production API may lag local prompt changes (Vite proxies /api to flyercheck.io).
 * Use OCR + response flags so obvious non-flyers never keep a strong score.
 */
function applyFlyerGate(analysis, extractedText) {
    if (!analysis || typeof analysis !== 'object') return analysis;

    if (analysis.isEventFlyer === false) {
        return forceNonFlyerAnalysis(
            analysis,
            analysis.notFlyerReason || 'This image does not appear to be an event flyer.',
        );
    }

    const fromText = detectNonFlyerFromText(extractedText || analysis.extractedText);
    if (fromText.notFlyer) {
        return forceNonFlyerAnalysis(analysis, fromText.reason);
    }

    const summary = String(analysis.positiveSummary || '');
    if (
        /\b(not an? event flyer|doesn'?t look like (an? )?event flyer|isn'?t (an? )?event flyer|not a flyer)\b/i.test(
            summary,
        )
    ) {
        return forceNonFlyerAnalysis(
            analysis,
            analysis.notFlyerReason || 'This image does not appear to be an event flyer.',
        );
    }

    // Weak event signals + high score on sparse/odd OCR → still allow model, but if OCR is clearly a UI page
    const text = String(extractedText || analysis.extractedText || '');
    const hasEventSignal = EVENT_SIGNAL_PATTERNS.some((re) => re.test(text));
    const score = Number(analysis.overallScore);
    if (
        text.length > 40 &&
        !hasEventSignal &&
        Number.isFinite(score) &&
        score >= 7 &&
        /\b(screenshot|website|web page|homepage|landing page|user interface|dashboard)\b/i.test(summary)
    ) {
        return forceNonFlyerAnalysis(
            analysis,
            'This appears to be a website or interface screenshot rather than an event flyer.',
        );
    }

    return {
        ...analysis,
        isEventFlyer: analysis.isEventFlyer !== false,
        extractedText: analysis.extractedText || extractedText || '',
    };
}

/**
 * Shrink large phone photos / exports until under the API payload budget.
 * Small files are left alone; medium files get one pass; oversized files retry harder.
 */
async function compressToPayloadSize(file) {
    if (file.size <= 350 * 1024) {
        return file;
    }

    const attempts =
        file.size > MAX_PAYLOAD_BYTES
            ? [
                  { max: 1600, quality: 0.82 },
                  { max: 1400, quality: 0.72 },
                  { max: 1200, quality: 0.62 },
                  { max: 1000, quality: 0.52 },
                  { max: 900, quality: 0.45 },
              ]
            : [{ max: 1600, quality: 0.82 }];

    let best = file;
    for (const { max, quality } of attempts) {
        const next = await compressImage(file, max, max, quality, 'image/jpeg');
        if (next.size < best.size) {
            best = next;
        }
        if (best.size <= MAX_PAYLOAD_BYTES) {
            return best;
        }
    }
    return best;
}

function compressImage(file, maxWidth = 2000, maxHeight = 2000, quality = 0.85, outputType = null) {
    const type =
        outputType ||
        (file.type === 'image/png' || file.type === 'image/webp' ? 'image/jpeg' : file.type) ||
        'image/jpeg';

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth || height > maxHeight) {
                    if (width > height) {
                        if (width > maxWidth) {
                            height = (height * maxWidth) / width;
                            width = maxWidth;
                        }
                    } else if (height > maxHeight) {
                        width = (width * maxHeight) / height;
                        height = maxHeight;
                    }
                }

                canvas.width = Math.max(1, Math.round(width));
                canvas.height = Math.max(1, Math.round(height));

                const ctx = canvas.getContext('2d');
                if (type === 'image/jpeg') {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                canvas.toBlob(
                    (blob) => {
                        if (!blob) {
                            reject(new Error('Failed to compress image'));
                            return;
                        }
                        const baseName = (file.name || 'flyer').replace(/\.[^.]+$/, '') || 'flyer';
                        const ext = type === 'image/webp' ? 'webp' : type === 'image/png' ? 'png' : 'jpg';
                        resolve(new File([blob], `${baseName}.${ext}`, { type, lastModified: Date.now() }));
                    },
                    type,
                    quality
                );
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            // Remove data URL prefix (e.g., "data:image/jpeg;base64,")
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
let tesseractLoadPromise = null;

function loadTesseract() {
  // If already available, return immediately
  if (typeof window !== "undefined" && window.Tesseract) {
    return Promise.resolve(window.Tesseract);
  }

  // If we already started loading it, reuse the same promise
  if (tesseractLoadPromise) return tesseractLoadPromise;

  tesseractLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.async = true;
    script.onload = () => resolve(window.Tesseract);
    script.onerror = () => reject(new Error("Failed to load Tesseract.js"));
    document.head.appendChild(script);
  });

  return tesseractLoadPromise;
}
// Extract text using Tesseract.js
async function extractTextWithTesseract(file) {
    // Check if Tesseract is loaded
    let Tesseract;
    try {
      Tesseract = await loadTesseract();
    } catch (e) {
      console.warn("Tesseract failed to load, skipping OCR", e);
      return "OCR not available – text extraction skipped";
    }
    
    try {
        const { data: { text } } = await Tesseract.recognize(file, 'eng', {
            logger: m => {
                if (m.status === 'recognizing text') {
                    console.log(`OCR Progress: ${Math.round(m.progress * 100)}%`);
                }
            }
        });
        return text.trim() || 'No text detected in image';
    } catch (error) {
        console.error('OCR error:', error);
        return 'Failed to extract text - analysis will continue with design elements only';
    }
}

// Basic client-side design analysis
async function analyzeDesignClientSide(file) {
    return new Promise((resolve) => {
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            // Get image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            // Basic color analysis
            const colors = {};
            let totalPixels = 0;
            
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const brightness = (r + g + b) / 3;
                
                if (brightness > 200) colors.light = (colors.light || 0) + 1;
                if (brightness < 50) colors.dark = (colors.dark || 0) + 1;
                totalPixels++;
            }
            
            const hasGoodContrast = (colors.light / totalPixels > 0.2) && (colors.dark / totalPixels > 0.2);
            
            resolve({
                width: img.width,
                height: img.height,
                aspectRatio: (img.width / img.height).toFixed(2),
                hasGoodContrast: hasGoodContrast,
                colors: {
                    lightPixels: ((colors.light / totalPixels) * 100).toFixed(1) + '%',
                    darkPixels: ((colors.dark / totalPixels) * 100).toFixed(1) + '%'
                }
            });
        };
        
        img.src = URL.createObjectURL(file);
    });
}

// Mock AI analysis - Replace this with actual API call
async function getAIAnalysisMock(extractedText, designAnalysis, targetAudience) {
    // This is a mock - replace with actual OpenAI/Gemini API call
    const textLower = extractedText.toLowerCase();
    
    const strengths = [];
    const improvements = [];
    const recommendations = [];
    
    // Basic text analysis
    if (textLower.includes('date') || textLower.includes('time') || textLower.includes('when')) {
        strengths.push('Event date/time information is present');
    } else {
        improvements.push('Missing event date or time information');
        recommendations.push('Add clear date and time for your event');
    }
    
    if (textLower.includes('location') || textLower.includes('address') || textLower.includes('where')) {
        strengths.push('Location information is present');
    } else {
        improvements.push('Missing location or address information');
        recommendations.push('Include the event location or address');
    }
    
    if (textLower.includes('$') || textLower.includes('price') || textLower.includes('ticket')) {
        strengths.push('Pricing information is present');
    } else {
        recommendations.push('Consider adding ticket price or pricing information');
    }
    
    // Design analysis
    if (designAnalysis.hasGoodContrast) {
        strengths.push('Good color contrast for readability');
    } else {
        improvements.push('Consider improving color contrast for better readability');
        recommendations.push('Use darker text on light backgrounds or vice versa');
    }
    
    // Audience-specific tips
    const audienceTips = {
        'gen-z': 'Use emojis and modern language. Keep it short and visual.',
        'seniors': 'Use larger fonts and clear, simple language.',
        'parents-families': 'Highlight family-friendly aspects and safety information.',
        'lgbtq': 'Ensure inclusive language and welcoming tone.',
        'students': 'Emphasize affordability and social aspects.',
        'professionals': 'Use professional tone and highlight networking opportunities.'
    };
    
    return {
        strengths,
        improvements,
        recommendations,
        audienceSpecificTips: audienceTips[targetAudience] || 'Consider your target audience when crafting your message.'
    };
}

// For production: Replace mock with actual API call
async function getAIAnalysisFromAPI(extractedText, designAnalysis, targetAudience) {
    // Example API call structure:
    /*
    const response = await fetch('/api/analyze-flyer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            text: extractedText,
            design: designAnalysis,
            audience: targetAudience
        })
    });
    return await response.json();
    */
}

