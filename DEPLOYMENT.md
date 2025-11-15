# Deployment Guide - Vercel + GitHub

## Prerequisites

1. **GitHub Account** - You'll need a GitHub account
2. **Vercel Account** - Sign up at https://vercel.com (free tier works great)
3. **OpenAI API Key** - Already configured in `.env`

## Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit - Revaya Hospitality Group website"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `revaya-company-website`)
3. **DO NOT** initialize with README, .gitignore, or license
4. Copy the repository URL

## Step 3: Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/revaya-company-website.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (default)
   - **Build Command**: Leave empty or use `echo 'Static site'`
   - **Output Directory**: `./` (default)
5. Add Environment Variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: `[YOUR_OPENAI_API_KEY_HERE]` (Get from https://platform.openai.com/api-keys)
6. Click "Deploy"

### Option B: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

When prompted:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **revaya-company-website** (or your choice)
- Directory? **./**
- Override settings? **No**

Then add environment variable:
```bash
vercel env add OPENAI_API_KEY
# Paste your API key when prompted
```

## Step 5: Verify Deployment

1. Vercel will provide a deployment URL (e.g., `https://revaya-company-website.vercel.app`)
2. Test the flyer check feature at: `https://your-url.vercel.app/flyercheck`
3. Verify the API endpoint works

## Important Notes

### Environment Variables
- The `.env` file is in `.gitignore` and won't be committed
- You MUST add `OPENAI_API_KEY` in Vercel dashboard under Project Settings > Environment Variables
- Add it for all environments: Production, Preview, and Development

### File Structure
- Static files (HTML, CSS, JS) are served directly
- API endpoint is at `/api/analyze-flyer` (serverless function)
- SPA routing is handled by `vercel.json` rewrites

### Custom Domain (Optional)
1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### API Not Working
- Check that `OPENAI_API_KEY` is set in Vercel environment variables
- Verify the API function is deployed (check Vercel function logs)
- Check browser console for errors

### Routing Issues
- Ensure `vercel.json` is in the root directory
- Check that all routes redirect to `index.html` for SPA

### Build Errors
- This is a static site, so no build is needed
- If Vercel tries to build, set build command to empty or `echo 'Static site'`

## Continuous Deployment

Once connected:
- Every push to `main` branch = automatic production deployment
- Every pull request = preview deployment
- All deployments are automatic!

## Cost Estimate

- **Vercel**: Free tier includes:
  - 100GB bandwidth/month
  - Unlimited deployments
  - Serverless functions (100GB-hours/month)
- **OpenAI API**: Pay per use (~$0.01-0.03 per analysis)
- **Total**: Essentially free for moderate traffic

