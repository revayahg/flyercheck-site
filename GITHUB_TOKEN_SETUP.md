# GitHub Personal Access Token Setup

## Step 1: Create a Personal Access Token

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Vercel Deployment` or `Revaya Website`
4. Set expiration: Choose your preference (90 days, 1 year, or no expiration)
5. Select scopes - **Check these:**
   - ✅ **`repo`** (Full control of private repositories)
     - This includes: repo:status, repo_deployment, public_repo, repo:invite, security_events
6. Click **"Generate token"** at the bottom
7. **⚠️ IMPORTANT:** Copy the token immediately - you won't be able to see it again!

## Step 2: Use the Token

You have two options:

### Option A: Use Token in Git URL (One-time)

When you push, use this format:
```bash
git push https://YOUR_TOKEN@github.com/USERNAME/REPO_NAME.git main
```

### Option B: Use Token with Credential Helper (Recommended)

This saves the token securely:

```bash
# Store token in git credential helper
git config --global credential.helper store

# Then when you push, use your token as the password
git push -u origin main
# Username: your-github-username
# Password: paste-your-token-here
```

### Option C: Use Environment Variable

```bash
# Set token as environment variable
export GITHUB_TOKEN=your_token_here

# Then push (the script will use it)
./push-to-github.sh
```

## Step 3: Push Your Code

Once you have your token, you can:

1. **Tell me your repository URL** and I'll set it up
2. **Or run the script:**
   ```bash
   ./push-to-github.sh https://github.com/YOUR_USERNAME/REPO_NAME.git
   ```

## Security Note

- ✅ Tokens are safer than passwords
- ✅ You can revoke them anytime
- ✅ They have specific permissions
- ⚠️ Never commit tokens to git (they're in .gitignore)

## What I Need From You

To automate the push, I need:

1. **Your GitHub repository URL** (e.g., `https://github.com/username/repo-name.git`)
   - Or just the username and repo name
2. **Your Personal Access Token** (I can help you use it securely)

Then I can:
- ✅ Set up the remote
- ✅ Push all your code
- ✅ Verify it worked

---

## Quick Command Reference

```bash
# Add remote (if not already added)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Or update existing remote
git remote set-url origin https://github.com/USERNAME/REPO_NAME.git

# Rename branch to main
git branch -M main

# Push (will prompt for username and token)
git push -u origin main
```

When prompted:
- **Username:** Your GitHub username
- **Password:** Your Personal Access Token (not your GitHub password!)

