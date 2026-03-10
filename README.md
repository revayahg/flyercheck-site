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

The site and API live in **`revaya-site/`**. From the repo root:

1. Go into the app and install dependencies:
```bash
cd revaya-site
npm install
```

2. Create `revaya-site/.env` (for Flyer Check API):
```
OPENAI_API_KEY=your_openai_api_key_here
```

3. Start development server (from inside `revaya-site/`):
```bash
npm run dev
```

4. Open the URL shown (e.g. http://localhost:5173)

## Deployment

Deploy on Vercel with **Root Directory** set to `revaya-site`. See `revaya-site/DEPLOY.md` for details. Add `OPENAI_API_KEY` in Vercel project environment variables for Flyer Check.

## Project Structure

```
revaya-site/
├── api/                    # Serverless API (Flyer Check)
│   ├── analyze-flyer.js
│   └── analyzeFlyer.js
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
├── public/
│   └── styles/
├── index.html
└── vercel.json
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required for flyer analysis)

## License

Private - Revaya Hospitality Group
