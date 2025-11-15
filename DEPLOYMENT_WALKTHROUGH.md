# Step-by-Step: Deploy to Vercel via GitHub

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] GitHub account (sign up at https://github.com if needed)
- [ ] Vercel account (sign up at https://vercel.com if needed)
- [ ] OpenAI API key (get from https://platform.openai.com/api-keys)

---

## Step 1: Prepare Your Code (5 minutes)

### 1.1 Check Your Current Status
```bash
# Make sure you're in the project directory
cd "/Users/thiagoferreira/Library/CloudStorage/OneDrive-RevayaHospitalityGroup/Jolyse Stultz's files - Revaya Hospitality Group/7. Company Website/New Company Website WIP"

# Check git status
git status
```

### 1.2 Commit All Changes
```bash
# Add all files
git add .

# Commit with a message
git commit -m "Ready for deployment - security fixes applied"
```

**What this does:** Saves all your work to git before pushing to GitHub.

---

## Step 2: Create GitHub Repository (3 minutes)

### 2.1 Go to GitHub
1. Open your browser and go to: **https://github.com/new**
2. Make sure you're logged in to your GitHub account

### 2.2 Create New Repository
1. **Repository name:** Enter something like `revaya-company-website` or `revaya-hospitality-site`
2. **Description (optional):** "Company website with AI-powered flyer analysis"
3. **Visibility:** Choose:
   - ✅ **Private** (recommended) - Only you can see it
   - ⚠️ **Public** - Anyone can see it (not recommended if you have sensitive info)
4. **DO NOT** check any of these boxes:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
5. Click the green **"Create repository"** button

### 2.3 Copy Repository URL
After creating, GitHub will show you a page with setup instructions. You'll see a URL like:
```
https://github.com/YOUR_USERNAME/revaya-company-website.git
```
**Copy this URL** - you'll need it in the next step.

---

## Step 3: Connect Local Code to GitHub (2 minutes)

### 3.1 Add GitHub Remote
```bash
# Replace YOUR_USERNAME and REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Example:
# git remote add origin https://github.com/johnsmith/revaya-company-website.git
```

### 3.2 Rename Branch to Main
```bash
git branch -M main
```

### 3.3 Push to GitHub
```bash
git push -u origin main
```

**What happens:**
- You'll be prompted for your GitHub username and password
- For password, you'll need a **Personal Access Token** (see below if needed)

### 3.4 If You Need a Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name like "Vercel Deployment"
4. Select scopes: Check **`repo`** (full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

**After pushing:** Refresh your GitHub repository page - you should see all your files!

---

## Step 4: Deploy to Vercel (5 minutes)

### 4.1 Go to Vercel
1. Open: **https://vercel.com/new**
2. Make sure you're logged in (or sign up if needed)

### 4.2 Import Your Repository
1. You'll see options to import from:
   - GitHub
   - GitLab
   - Bitbucket
2. Click **"Import"** next to GitHub
3. If this is your first time, you'll be asked to:
   - **Authorize Vercel** to access your GitHub account
   - Click **"Authorize Vercel"** or **"Install"**
   - Select which repositories to allow (or "All repositories")
4. Find your repository (`revaya-company-website` or whatever you named it)
5. Click **"Import"** next to it

### 4.3 Configure Project Settings
You'll see a configuration page. Here's what to set:

**Framework Preset:**
- Select: **"Other"** or leave as default

**Root Directory:**
- Leave as: `./` (default)

**Build Command:**
- Leave **empty** OR enter: `echo 'Static site - no build needed'`

**Output Directory:**
- Leave as: `./` (default)

**Install Command:**
- Leave as: `npm install` (default)

### 4.4 Add Environment Variables
**This is critical!**

1. Click **"Environment Variables"** section
2. Click **"Add"** or the **"+"** button
3. Add your OpenAI API key:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your actual OpenAI API key (from https://platform.openai.com/api-keys)
   - **Environments:** Check all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
4. Click **"Add"** or **"Save"**

**Optional - For Production CORS:**
5. Add another environment variable:
   - **Name:** `ALLOWED_ORIGINS`
   - **Value:** `https://yourdomain.com,https://www.yourdomain.com` (replace with your actual domain)
   - **Environments:** ✅ Production only
   - Click **"Add"**

### 4.5 Deploy!
1. Scroll down and click the big **"Deploy"** button
2. Wait 1-2 minutes while Vercel:
   - Installs dependencies
   - Builds your project
   - Deploys to a URL

---

## Step 5: Verify Deployment (2 minutes)

### 5.1 Check Deployment Status
- You'll see a progress screen
- Wait for it to say **"Ready"** or **"Deployed"**

### 5.2 Get Your URL
- Vercel will give you a URL like: `https://revaya-company-website.vercel.app`
- Click **"Visit"** or copy the URL

### 5.3 Test Your Site
1. Open the URL in your browser
2. Test the main pages:
   - Homepage loads ✅
   - Navigation works ✅
   - Flyer Check page loads ✅
3. Test the Flyer Check feature:
   - Upload a test image
   - Select category and audience
   - Click "Analyze Flyer"
   - Wait for results (15-30 seconds)
   - Results should appear ✅

### 5.4 Check Function Logs (if needed)
If something doesn't work:
1. Go to your Vercel dashboard
2. Click on your project
3. Go to **"Functions"** tab
4. Click on **"analyze-flyer"**
5. Check the **"Logs"** tab for any errors

---

## Step 6: Set Up Custom Domain (Optional)

### 6.1 Add Domain in Vercel
1. In your Vercel project dashboard
2. Go to **"Settings"** → **"Domains"**
3. Enter your domain (e.g., `yourdomain.com`)
4. Click **"Add"**

### 6.2 Configure DNS
Vercel will show you DNS records to add:
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add the DNS records Vercel provides
3. Wait for DNS propagation (can take up to 48 hours, usually much faster)

---

## 🎉 You're Done!

Your site is now live! Here's what happens automatically:

### Automatic Deployments
- ✅ Every push to `main` branch = **Production deployment**
- ✅ Every pull request = **Preview deployment** (separate URL)
- ✅ All deployments are automatic - no manual steps needed!

### Monitoring
- Check **"Deployments"** tab in Vercel to see all deployments
- Check **"Analytics"** tab for traffic stats (if enabled)
- Check **"Functions"** tab for API usage

---

## 🔧 Troubleshooting

### Problem: "Build Failed"
**Solution:**
- Check the build logs in Vercel
- Make sure `package.json` has correct dependencies
- Verify all files are committed to git

### Problem: "API Not Working"
**Solution:**
- Check that `OPENAI_API_KEY` is set in Environment Variables
- Verify it's set for all environments (Production, Preview, Development)
- Check Function logs for errors

### Problem: "CORS Error"
**Solution:**
- Add `ALLOWED_ORIGINS` environment variable
- Set it to your Vercel domain or custom domain

### Problem: "Can't Push to GitHub"
**Solution:**
- Make sure you're using a Personal Access Token (not password)
- Check that you have write access to the repository
- Verify the remote URL is correct: `git remote -v`

---

## 📝 Quick Reference Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Check remote URL
git remote -v

# View deployment logs (in Vercel dashboard)
# Go to: Project → Functions → analyze-flyer → Logs
```

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] Code pushed to GitHub
- [ ] Repository is private (if sensitive)
- [ ] Vercel project created
- [ ] `OPENAI_API_KEY` environment variable added
- [ ] Deployment successful
- [ ] Site loads correctly
- [ ] Flyer Check feature works
- [ ] Custom domain configured (if applicable)
- [ ] DNS records added (if using custom domain)

---

## 🆘 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Docs:** https://docs.github.com
- **Vercel Support:** https://vercel.com/support

---

**You're all set! Your site is now live and will automatically update whenever you push to GitHub.** 🚀

