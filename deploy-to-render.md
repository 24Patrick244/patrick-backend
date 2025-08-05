# Deploy to Render - Step by Step Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `patrick-furnitures-backend`
3. Make it **Public**
4. Click "Create repository"

## Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/patrick-furnitures-backend.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

## Step 3: Deploy on Render

1. Go to https://dashboard.render.com/
2. Click **"New +" → "Web Service"**
3. Connect your GitHub account
4. Select your `patrick-furnitures-backend` repository
5. Configure the service:
   - **Name:** `patrick-furnitures-backend`
   - **Root Directory:** `/backend` (since your backend is in a backend folder)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:**
     - Key: `MONGODB_URI`
     - Value: `mongodb+srv://patrick-furnitures-admin:Patrick%4024@cluster0.ashifhg.mongodb.net/patrick-furnitures?retryWrites=true&w=majority&appName=Cluster0`
6. Click **"Create Web Service"**

## Step 4: Wait for Deployment

- Render will build and deploy your app (takes 2-3 minutes)
- You'll get a URL like: `https://patrick-furnitures-backend.onrender.com`

## Step 5: Test Your API

Visit: `https://your-app-name.onrender.com/api/products`

## Step 6: Update Frontend

Change all API URLs in your React app from `http://localhost:5001` to your new Render URL.

---

## Quick Commands to Run:

```bash
# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/patrick-furnitures-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow the Render deployment steps above! 