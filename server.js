const http = require('http');
const fs = require('fs');
const path = require('path');
const { analyzeFlyerWithOpenAI } = require('./api/analyzeFlyer');
require('dotenv').config();

const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Handle API endpoint for flyer analysis
  if (req.method === 'POST' && req.url === '/api/analyze-flyer') {
    handleAnalyzeFlyerAPI(req, res);
    return;
  }

  // CORS headers for API requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // Remove query string and decode URI
  let filePath = '.' + req.url.split('?')[0];
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  
  // Check if it's a file request (has extension) or a SPA route (no extension)
  if (!extname) {
    // No extension - treat as SPA route, serve index.html
    fs.readFile('./index.html', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content, 'utf-8');
      }
    });
    return;
  }

  // Has extension - try to serve the actual file
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found - serve index.html for SPA routing
        fs.readFile('./index.html', (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Handle flyer analysis API endpoint
async function handleAnalyzeFlyerAPI(req, res) {
  const chunks = [];
  
  req.on('data', chunk => {
    chunks.push(chunk);
  });
  
  req.on('end', async () => {
    try {
      const buffer = Buffer.concat(chunks);
      const body = JSON.parse(buffer.toString());
      
      const { image, mimeType, targetAudience, eventCategories, eventCategory, extractedText } = body;
      
      // Support both single category (backward compatibility) and multiple categories
      const categories = eventCategories || (eventCategory ? [eventCategory] : []);
      
      if (!image || !targetAudience || !categories || categories.length === 0) {
        throw new Error('Missing required fields: image, targetAudience, and at least one eventCategory');
      }
      
      // Convert base64 to buffer
      const imageBuffer = Buffer.from(image, 'base64');
      
      // Analyze with OpenAI
      const result = await analyzeFlyerWithOpenAI(imageBuffer, mimeType || 'image/jpeg', targetAudience, categories, extractedText || '');
      
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(result));
    } catch (error) {
      console.error('API error:', error);
      res.writeHead(500, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({
        success: false,
        error: error.message
      }));
    }
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

