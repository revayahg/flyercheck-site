# Vercel API 404 Fix

## Issue
Getting 404 error when calling `/api/analyze-flyer` endpoint on Vercel.

## Root Cause
The catch-all route in `vercel.json` was intercepting API requests and sending them to `index.html` instead of the serverless function.

## Fix Applied
Updated `vercel.json` to explicitly route `/api/*` requests to the API functions before the catch-all route.

## Changes Made

1. **vercel.json** - Added explicit API route before catch-all:
   ```json
   {
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/api/$1"
       },
       // ... other routes
     ]
   }
   ```

2. **api/analyze-flyer.js** - Improved request body parsing to handle Vercel's format

## Next Steps

1. **Wait for Vercel to redeploy** (should happen automatically after push)
2. **Check Vercel deployment logs:**
   - Go to your Vercel project dashboard
   - Click on the latest deployment
   - Check "Functions" tab to see if `analyze-flyer` is listed
   - Check "Logs" tab for any errors

3. **Verify the function exists:**
   - In Vercel dashboard → Project → Functions
   - You should see `api/analyze-flyer` listed

4. **Test again:**
   - Try uploading and analyzing a flyer
   - Check browser console for errors
   - Check Vercel function logs if it still fails

## If Still Getting 404

1. **Check Vercel Functions tab:**
   - Go to: Project → Functions
   - Verify `api/analyze-flyer` appears in the list
   - If not, the function might not be detected

2. **Check function logs:**
   - Click on the function
   - Check "Logs" tab for errors
   - Look for any import/require errors

3. **Verify environment variables:**
   - Go to: Project → Settings → Environment Variables
   - Ensure `OPENAI_API_KEY` is set for all environments

4. **Check file structure:**
   - Ensure `api/analyze-flyer.js` exists
   - Ensure it exports: `module.exports = async (req, res) => {}`

## Alternative: Check Vercel Dashboard

If the issue persists, check in Vercel dashboard:
- **Deployments** → Latest deployment → **Functions** tab
- Should show: `api/analyze-flyer`
- If missing, Vercel isn't detecting the function

Possible reasons:
- File not in `api/` directory
- Incorrect export format
- Syntax error in function file

