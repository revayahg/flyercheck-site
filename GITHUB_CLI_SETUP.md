# GitHub CLI Setup - Quick Guide

## Option 1: Install GitHub CLI via Homebrew (Recommended)

### Step 1: Install Homebrew (if not installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Note:** This requires your password and may take a few minutes.

### Step 2: Install GitHub CLI
```bash
brew install gh
```

### Step 3: Authenticate with GitHub
```bash
gh auth login
```

This will:
1. Ask you to choose GitHub.com
2. Choose authentication method (browser recommended)
3. Open your browser to authorize
4. Complete authentication

### Step 4: Create Repository and Push
```bash
# Run the automated script
./create-repo.sh

# Or specify a custom name:
./create-repo.sh my-custom-repo-name
```

---

## Option 2: Manual GitHub CLI Installation

### macOS:
1. Download from: https://cli.github.com/
2. Or use: `brew install gh`

### Then authenticate:
```bash
gh auth login
```

---

## Option 3: I Can Do It For You (Manual Steps)

If you prefer, I can guide you through the manual steps. Just let me know:

1. **Your GitHub username** (or I can check if you're logged in)
2. **Repository name** (e.g., `revaya-company-website`)
3. **Private or Public** (recommend Private)

Then I'll provide the exact commands to run.

---

## What I Need From You:

To automate everything, I need:

1. ✅ **GitHub CLI installed** - I can help install it
2. ✅ **GitHub authentication** - You'll need to run `gh auth login` once
3. ✅ **Repository name** - What should we call it? (default: `revaya-company-website`)
4. ✅ **Visibility** - Private or Public? (recommend Private)

---

## Quick Start (If GitHub CLI is Ready):

Once GitHub CLI is installed and authenticated, just run:

```bash
./create-repo.sh
```

This will:
- ✅ Create the repository on GitHub
- ✅ Set it as private (or public if you choose)
- ✅ Connect it to your local code
- ✅ Push all your code
- ✅ Open the repository in your browser

Then you're ready for Vercel!

---

## Current Status:

Let me check what we can do automatically...

