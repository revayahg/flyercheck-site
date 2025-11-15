// Vercel serverless function for flyer analysis
const { analyzeFlyerWithOpenAI } = require('./analyzeFlyer');

// Security: Allowed origins (restrict in production)
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['*']; // Allow all in development, restrict in production

// Security: Maximum file size (10MB in base64 is ~13.3MB raw)
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_REQUEST_SIZE = 15 * 1024 * 1024; // 15MB (base64 is ~33% larger)

// Security: Allowed values for validation
const ALLOWED_AUDIENCES = [
  'general-public', 'parents-families', 'lgbtq', 'local-residents',
  'gen-z', 'students', 'professionals', 'tourists', 'seniors',
  'nonprofit', 'event-fans', 'fitness', 'religious', 'other'
];

const ALLOWED_CATEGORIES = [
  'corporate', 'hospitality', 'concert', 'wedding', 'nonprofit', 'other'
];

const ALLOWED_MIME_TYPES = [
  'image/jpeg', 'image/jpg', 'image/png', 'application/pdf'
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
        error: 'Request too large. Maximum size is 10MB.'
      });
      return;
    }

    const { image, mimeType, targetAudience, eventCategory, extractedText } = req.body;

    // Security: Validate required fields
    if (!image || !targetAudience || !eventCategory) {
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(400).json({
        success: false,
        error: 'Missing required fields: image, targetAudience, and eventCategory'
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
        error: 'File too large. Maximum size is 10MB.'
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

    if (!ALLOWED_CATEGORIES.includes(eventCategory)) {
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
      eventCategory,
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
    // Security: Don't expose internal error details
    const isDevelopment = process.env.NODE_ENV === 'development';
    res.status(500).json({
      success: false,
      error: isDevelopment ? error.message : 'An error occurred processing your request'
    });
  }
};
