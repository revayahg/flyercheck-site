// Flyer Analysis Service
// This is a client-side implementation using Tesseract.js for OCR
// For production, move this to a backend API

// Make function globally available
window.analyzeFlyerWithAI = async function(file, targetAudience, eventCategories) {
    try {
        // Step 1: Compress/resize image if needed (for images only, not PDFs)
        let processedFile = file;
        // Skip compression for HEIC/HEIF as browser canvas doesn't support them directly
        const isHeic = file.type === 'image/heic' || file.type === 'image/heif' || 
                      file.type === 'image/x-heic' || file.type === 'image/x-heif' ||
                      file.name?.toLowerCase().endsWith('.heic') || file.name?.toLowerCase().endsWith('.heif');
        
        if (file.type.startsWith('image/') && !isHeic && file.size > 1 * 1024 * 1024) { // Compress if > 1MB
            try {
                processedFile = await compressImage(file);
                console.log(`Image compressed: ${(file.size / 1024 / 1024).toFixed(2)}MB -> ${(processedFile.size / 1024 / 1024).toFixed(2)}MB`);
            } catch (compressError) {
                console.warn('Image compression failed, using original:', compressError);
                // Continue with original file
            }
        }
        
        // Step 2: Extract text using Tesseract.js (client-side OCR) - optional, for display
        // Skip OCR for PDFs as Tesseract.js doesn't support them
        let extractedText = '';
        if (!processedFile.type.includes('pdf')) {
            try {
                extractedText = await extractTextWithTesseract(processedFile);
            } catch (ocrError) {
                console.warn('OCR failed, continuing without extracted text:', ocrError);
                // Continue without extracted text - not critical for analysis
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
            const errorData = await response.json().catch(() => ({}));
            const serverMessage = errorData && typeof errorData.error === 'string' ? errorData.error.trim() : '';
            const errorMessage = serverMessage || (response.status === 500 || response.status === 504
                ? 'The analysis took too long or the service is temporarily unavailable. Try a smaller image or try again in a moment.'
                : `Request failed (${response.status}). Please try again.`);

            if (response.status === 413) {
                throw new Error('File too large. Please use an image smaller than 3MB, or try compressing it further.');
            }

            throw new Error(errorMessage);
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Analysis error:', error);
        return {
            success: false,
            error: error.message || 'Failed to analyze flyer'
        };
    }
}

// Compress image to reduce file size
function compressImage(file, maxWidth = 2000, maxHeight = 2000, quality = 0.85) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Calculate new dimensions
                if (width > maxWidth || height > maxHeight) {
                    if (width > height) {
                        if (width > maxWidth) {
                            height = (height * maxWidth) / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width = (width * maxHeight) / height;
                            height = maxHeight;
                        }
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // Convert to blob with compression
                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject(new Error('Failed to compress image'));
                        return;
                    }
                    resolve(blob);
                }, file.type, quality);
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

