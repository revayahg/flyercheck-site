// Flyer Analysis Service
// This is a client-side implementation using Tesseract.js for OCR
// For production, move this to a backend API

// Make function globally available
window.analyzeFlyerWithAI = async function(file, targetAudience, eventCategory) {
    try {
        // Step 1: Extract text using Tesseract.js (client-side OCR) - optional, for display
        let extractedText = '';
        try {
            extractedText = await extractTextWithTesseract(file);
        } catch (ocrError) {
            console.warn('OCR failed, continuing without extracted text:', ocrError);
        }
        
        // Step 2: Convert file to base64 for API
        const base64Image = await fileToBase64(file);
        
        // Step 3: Call backend API with OpenAI
        const response = await fetch('/api/analyze-flyer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: base64Image,
                mimeType: file.type,
                targetAudience: targetAudience,
                eventCategory: eventCategory,
                extractedText: extractedText
            })
        });
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
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

// Extract text using Tesseract.js
async function extractTextWithTesseract(file) {
    // Check if Tesseract is loaded
    if (typeof Tesseract === 'undefined') {
        console.warn('Tesseract.js not loaded, skipping OCR');
        return 'OCR not available - text extraction skipped';
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

