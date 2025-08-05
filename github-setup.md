# GitHub Setup for Backend Deployment

## Step 1: Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `patrick-furnitures-backend`
3. Make it Public
4. Click "Create repository"

## Step 2: Push Your Backend Code
Run these commands in your terminal:

```bash
# Navigate to your project root
cd C:\Users\izaba\patrick-furnitures

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit with backend"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/patrick-furnitures-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify on GitHub
1. Go to your repository on GitHub
2. You should see your backend folder with server.js and package.json

## Step 4: Connect to Render
1. Go to Render dashboard
2. Click "New +" → "Web Service"
3. Connect your GitHub account
4. Select your `patrick-furnitures-backend` repository
5. Set root directory to `/backend`
6. Continue with deployment setup 