# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Click "Try Free"
3. Fill in your details and create account

## Step 2: Create Free Cluster
1. Choose "Shared" (free tier)
2. Select "M0" cluster
3. Choose any cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region close to you
5. Click "Create"

## Step 3: Create Database User
1. Username: `patrick-furnitures-admin`
2. Password: Create a strong password (save it!)
3. Click "Create User"

## Step 4: Allow Network Access
1. Click "Network Access" in left menu
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

## Step 5: Get Connection String
1. Click "Database" in left menu
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your actual password
6. Add `/patrick-furnitures` at the end (before the `?`)

## Your Connection String Should Look Like:
```
mongodb+srv://patrick-furnitures-admin:YourPassword123@cluster0.xxxxx.mongodb.net/patrick-furnitures?retryWrites=true&w=majority
```

## Step 6: Deploy on Render
1. Go to: https://dashboard.render.com/
2. Click "New +" → "Web Service"
3. Connect your GitHub repo
4. Set root directory to `/backend`
5. Build command: `npm install`
6. Start command: `npm start`
7. Add environment variable:
   - Key: `MONGODB_URI`
   - Value: Your connection string from Step 5
8. Click "Create Web Service"

## Step 7: Update Frontend
Once deployed, Render will give you a URL like:
`https://your-backend.onrender.com`

Update your React app to use this URL instead of `http://localhost:5001` 