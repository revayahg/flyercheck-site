# Quick Deploy Guide - Vercel + GitHub

## 🚀 5-Minute Deployment

### Step 1: Push to GitHub (2 minutes)

```bash
# If you haven't already committed
git add .
git commit -m "Initial commit - ready for deployment"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (3 minutes)

1. **Go to**: https://vercel.com/new
2. **Click**: "Import Git Repository"
3. **Select**: Your GitHub repository
4. **Configure**:
   - Framework Preset: **Other** (or leave default)
   - Root Directory: `./` (default)
   - Build Command: **Leave empty** (or `echo 'Static site'`)
   - Output Directory: `./` (default)
5. **Environment Variables**:
   - Click "Environment Variables"
   - Add:
     - **Name**: `OPENAI_API_KEY`
     - **Value**: `[YOUR_OPENAI_API_KEY_HERE]` (Get from https://platform.openai.com/api-keys)
     - **Environments**: Check all (Production, Preview, Development)
6. **Click**: "Deploy"

### Step 3: Test (1 minute)

1. Wait for deployment to complete (~1-2 minutes)
2. Visit your deployment URL
3. Test the flyer check feature
4. ✅ Done!

## 📝 What's Already Configured

✅ **Vercel Configuration** (`vercel.json`)
- Static file serving
- SPA routing (all routes → index.html)
- API serverless function setup

✅ **API Endpoint** (`api/analyze-flyer.js`)
- Vercel serverless function format
- CORS headers configured
- Error handling

✅ **Git Setup**
- `.gitignore` configured
- All files ready to commit

✅ **Environment Variables**
- Documented in deployment guide
- Ready to add in Vercel dashboard

## 🔧 Important Notes

1. **No Build Required**: This is a static site, so no build step needed
2. **Environment Variable**: Must be added in Vercel dashboard (not in code)
3. **API Endpoint**: Automatically deployed as serverless function
4. **Custom Domain**: Can be added later in Vercel settings

## 🆘 Troubleshooting

**API not working?**
- Check Vercel function logs (Project → Functions tab)
- Verify `OPENAI_API_KEY` is set in environment variables
- Check browser console for errors

**Routes not working?**
- Verify `vercel.json` is in root directory
- Check that all routes redirect to `index.html`

**Build errors?**
- Set build command to empty
- This is a static site - no build needed

## 📊 After Deployment

- **Automatic Deployments**: Every push to `main` = new deployment
- **Preview Deployments**: Every PR = preview URL
- **Function Logs**: Available in Vercel dashboard
- **Analytics**: Available in Vercel dashboard (optional)

## 🎉 You're Ready!

Everything is configured. Just push to GitHub and deploy to Vercel!

