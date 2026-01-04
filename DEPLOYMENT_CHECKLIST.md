# Deployment Checklist

## Pre-Deployment Steps

### ✅ 1. Git Repository Setup
- [x] Git repository initialized
- [ ] Create GitHub repository
- [ ] Push code to GitHub

### ✅ 2. Configuration Files
- [x] `vercel.json` created
- [x] `api/analyze-flyer.js` created (Vercel serverless function)
- [x] `.gitignore` updated (excludes .env, node_modules)
- [x] `package.json` updated with build scripts

### ⚠️ 3. Environment Variables
- [ ] Add `OPENAI_API_KEY` to Vercel project settings
- [ ] Verify API key is correct

### ✅ 4. Code Review
- [x] All files committed
- [x] No sensitive data in code
- [x] API endpoint properly configured

## Deployment Steps

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (leave empty or `echo 'Static site'`)
   - **Output Directory**: `./`
4. **Add Environment Variable**:
   - Name: `OPENAI_API_KEY`
   - Value: `[YOUR_OPENAI_API_KEY_HERE]` (Get from https://platform.openai.com/api-keys)
   - Apply to: Production, Preview, Development
5. Click **Deploy**

### Step 3: Verify Deployment

- [ ] Site loads at Vercel URL
- [ ] Navigation works (all routes)
- [ ] Flyer Check page loads
- [ ] File upload works
- [ ] API endpoint responds (check Network tab)
- [ ] Analysis completes successfully

## Post-Deployment

### Custom Domain (Optional)
- [ ] Add custom domain in Vercel settings
- [ ] Configure DNS records
- [ ] Verify SSL certificate

### Monitoring
- [ ] Check Vercel function logs
- [ ] Monitor API usage
- [ ] Set up error tracking (optional)

## Troubleshooting

### If API doesn't work:
1. Check Vercel function logs (Project > Functions tab)
2. Verify `OPENAI_API_KEY` is set correctly
3. Check browser console for CORS errors
4. Verify API endpoint URL matches deployment

### If routing doesn't work:
1. Check `vercel.json` configuration
2. Verify all routes redirect to `index.html`
3. Check Vercel deployment logs

### If build fails:
1. This is a static site - no build needed
2. Set build command to empty or `echo 'Static site'`
3. Check that all dependencies are in `package.json`

## Files Ready for Deployment

✅ All static files (HTML, CSS, JS, images)
✅ API serverless function (`api/analyze-flyer.js`)
✅ Vercel configuration (`vercel.json`)
✅ Environment variables documented
✅ Git repository initialized

## Next Steps

1. **Create GitHub repository**
2. **Push code to GitHub**
3. **Deploy to Vercel**
4. **Add environment variable**
5. **Test deployment**

