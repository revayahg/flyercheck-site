# Revaya Hospitality Group - Company Website

A modern company website with AI-powered flyer analysis feature.

## Features

- **Company Website**: Professional landing page with information about Revaya Hospitality Group
- **Revaya Flyer Check™**: AI-powered event flyer analysis tool
- **Revaya Host™**: Event management solution information
- **Responsive Design**: Works on all devices

## Tech Stack

- **Frontend**: React (client-side with Babel), HTML, CSS
- **Backend API**: Node.js serverless functions (Vercel)
- **AI Analysis**: OpenAI GPT-4 Vision API
- **OCR**: Tesseract.js (client-side)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
OPENAI_API_KEY=your_openai_api_key_here
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:3000

## Deployment

This project is configured for deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

1. Push to GitHub
2. Import to Vercel
3. Add `OPENAI_API_KEY` environment variable
4. Deploy!

## Project Structure

```
├── api/                    # Serverless API functions
│   ├── analyze-flyer.js   # Vercel serverless function
│   └── analyzeFlyer.js    # OpenAI integration
├── components/            # React components
├── pages/                 # Page components
├── styles/                # CSS stylesheets
├── utils/                 # Utility functions
├── index.html             # Main HTML file
├── server.js              # Local development server
└── vercel.json            # Vercel configuration
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required for flyer analysis)

## License

Private - Revaya Hospitality Group
