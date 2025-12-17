// Vercel serverless function for flyer analysis
const { analyzeFlyerWithOpenAI } = require('./analyzeFlyer');

// Security: Allowed origins (restrict in production)
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['*']; // Allow all in development, restrict in production

// Security: Maximum file size
// Vercel has a 4.5MB request body limit, so we limit to 3MB raw (becomes ~4MB base64)
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB raw file
const MAX_REQUEST_SIZE = 4 * 1024 * 1024; // 4MB base64 (safely under Vercel's 4.5MB limit)

// Security: Allowed values for validation
const ALLOWED_AUDIENCES = [
  'general-public', 'parents-families', 'lgbtq', 'local-residents',
  'gen-z', 'students', 'professionals', 'tourists', 'seniors',
  'nonprofit', 'event-fans', 'fitness', 'religious', 'other'
];

const ALLOWED_CATEGORIES = [
  // Nightlife & Social
  'party-nightlife', 'club-event', 'happy-hour', 'bar-event',
  // Arts, Culture & Entertainment
  'concert-live-music', 'festival-fair', 'theater-performance', 'comedy-show', 'art-show',
  // Community & Nonprofit
  'community-event', 'fundraiser-charity', 'parade-march-pride', 'cultural-celebration',
  // Business & Professional
  'conference', 'networking-event', 'workshop-training', 'trade-show-expo', 'corporate-meeting',
  // Sports & Fitness
  'sports-event', 'fitness-wellness', 'tournament-competition',
  // Education
  'class-course', 'lecture-speaker', 'campus-event',
  // Hospitality & Food
  'restaurant-event', 'food-drink-festival', 'tasting-event',
  // Family & Kids
  'kids-event', 'family-friendly',
  // Special Occasions
  'holiday-event', 'themed-event', 'grand-opening', 'anniversary-celebration',
  // Other
  'general-event', 'virtual-event',
  // Legacy categories for backward compatibility
  'corporate', 'hospitality', 'concert', 'wedding', 'nonprofit', 'other'
];

// Note: PDFs are not supported by OpenAI Vision API
const ALLOWED_MIME_TYPES = [
  'image/jpeg', 
  'image/jpg', 
  'image/png', 
  'image/avif',
  'image/heic',
  'image/heif',
  'image/webp',
  'image/x-heic',
  'image/x-heif'
];

// Security: Sanitize input to prevent prompt injection
function sanitizeInput(input, maxLength = 10000) {
  if (typeof input !== 'string') return '';
  // Remove potential prompt injection patterns
  return input
    .slice(0, maxLength)
    .replace(/[\r\n]/g, ' ') // Remove newlines
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim();
}

// Security: Validate base64 string
function isValidBase64(str) {
  if (typeof str !== 'string' || str.length === 0) return false;
  // Base64 should only contain A-Z, a-z, 0-9, +, /, and = for padding
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(str) && str.length > 0;
}

module.exports = async (req, res) => {
  // Security: Get origin and validate CORS
  const origin = req.headers.origin || req.headers.referer;
  const isAllowedOrigin = ALLOWED_ORIGINS.includes('*') || 
    (origin && ALLOWED_ORIGINS.some(allowed => origin.includes(allowed)));

  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': isAllowedOrigin ? (origin || '*') : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    // Security headers
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block'
  };

  // Handle preflight
  if (req.method === 'OPTIONS') {
    Object.keys(headers).forEach(key => {
      res.setHeader(key, headers[key]);
    });
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    Object.keys(headers).forEach(key => {
      res.setHeader(key, headers[key]);
    });
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Security: Check request size
    const contentLength = parseInt(req.headers['content-length'] || '0');
    if (contentLength > MAX_REQUEST_SIZE) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(413).json({
        success: false,
        error: 'File too large. Maximum size is 3MB. Please compress your image or use a smaller file.'
      });
      return;
    }

    // Parse request body (Vercel may already parse it, but handle both cases)
    let body = req.body;
    if (typeof body === 'string' || Buffer.isBuffer(body)) {
      try {
        body = JSON.parse(body.toString());
      } catch (e) {
        Object.keys(headers).forEach(key => {
          res.setHeader(key, headers[key]);
        });
        res.status(400).json({
          success: false,
          error: 'Invalid JSON in request body'
        });
        return;
      }
    }

    const { image, mimeType, targetAudience, eventCategories, eventCategory, extractedText } = body;

    // Support both single category (backward compatibility) and multiple categories
    const categories = eventCategories || (eventCategory ? [eventCategory] : []);

    // Security: Validate required fields
    if (!image || !targetAudience || !categories || categories.length === 0) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(400).json({
        success: false,
        error: 'Missing required fields: image, targetAudience, and at least one eventCategory'
      });
      return;
    }

    // Security: Validate and sanitize inputs
    if (!isValidBase64(image)) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(400).json({
        success: false,
        error: 'Invalid image format'
      });
      return;
    }

    // Security: Check image size (base64 is ~33% larger than original)
    const imageSize = (image.length * 3) / 4;
    if (imageSize > MAX_FILE_SIZE) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(413).json({
        success: false,
        error: 'File too large. Maximum size is 3MB. Please compress your image or use a smaller file.'
      });
      return;
    }

    // Security: Validate allowed values
    if (!ALLOWED_AUDIENCES.includes(targetAudience)) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(400).json({
        success: false,
        error: 'Invalid target audience'
      });
      return;
    }

    // Validate all categories
    const invalidCategories = categories.filter(cat => !ALLOWED_CATEGORIES.includes(cat));
    if (invalidCategories.length > 0) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(400).json({
        success: false,
        error: 'Invalid event category'
      });
      return;
    }

    // Security: Validate MIME type
    if (mimeType && !ALLOWED_MIME_TYPES.includes(mimeType)) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(400).json({
        success: false,
        error: 'Invalid file type'
      });
      return;
    }

    // Security: Sanitize extracted text to prevent prompt injection
    const sanitizedText = extractedText ? sanitizeInput(extractedText, 5000) : '';

    // Convert base64 to buffer
    const imageBuffer = Buffer.from(image, 'base64');

    // Analyze with OpenAI (with sanitized inputs)
    const result = await analyzeFlyerWithOpenAI(
      imageBuffer,
      mimeType || 'image/jpeg',
      targetAudience,
      categories,
      sanitizedText
    );

    Object.keys(headers).forEach(key => {
      res.setHeader(key, headers[key]);
    });
    res.status(200).json(result);
  } catch (error) {
    console.error('API error:', error);
    Object.keys(headers).forEach(key => {
      res.setHeader(key, headers[key]);
    });
    
    // Provide more helpful error messages
    let errorMessage = 'An error occurred processing your request';
    const errorMsg = error.message || '';
    
    if (errorMsg.includes('PDF') || errorMsg.includes('pdf') || errorMsg.includes('not directly supported')) {
      errorMessage = 'PDF files are not directly supported. Please convert your PDF to an image (JPG or PNG) first. You can take a screenshot of the PDF or use an online PDF-to-image converter.';
    } else if (errorMsg.includes('image') || errorMsg.includes('format')) {
      errorMessage = 'There was an issue processing the image file. Please ensure the file is a valid image (JPG, PNG, AVIF, HEIC, or WEBP) or PDF.';
    } else if (errorMsg.includes('size') || errorMsg.includes('large')) {
      errorMessage = 'The file is too large. Maximum size is 3MB. Please compress your file or use a smaller one.';
    } else if (errorMsg.includes('OpenAI') || errorMsg.includes('API')) {
      errorMessage = 'The AI analysis service is temporarily unavailable. Please try again in a few moments.';
    } else if (process.env.NODE_ENV === 'development') {
      errorMessage = error.message || 'An error occurred processing your request';
    }
    
    res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
};
