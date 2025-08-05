# Complete Render Deployment Guide

## 🎯 Step-by-Step Instructions

### Step 1: Access Render Dashboard
1. Go to: https://dashboard.render.com/
2. Sign in with your account
3. Click on your service: `patrick-furnitures`

### Step 2: Go to Settings
1. Click the "Settings" tab
2. Scroll down to "Build & Deploy" section

### Step 3: Update Build Command
1. Find "Build Command" field
2. **DELETE** the current text: `npm install`
3. **TYPE** exactly: `cd backend && npm install`

### Step 4: Update Start Command
1. Find "Start Command" field
2. **DELETE** the current text: `npm start`
3. **TYPE** exactly: `cd backend && npm start`

### Step 5: Add Environment Variable
1. Scroll down to "Environment Variables" section
2. Click "+ Add Environment Variable"
3. **Key:** `MONGODB_URI`
4. **Value:** `mongodb+srv://patrick-furnitures-admin:Patrick%4024@cluster0.ashifhg.mongodb.net/patrick-furnitures?retryWrites=true&w=majority&appName=Cluster0`

### Step 6: Save Changes
1. Click "Save Changes" button
2. Wait for confirmation

### Step 7: Redeploy
1. Go to "Manual Deploy" tab
2. Click "Deploy latest commit"
3. Watch the deployment logs

## ✅ Expected Results

After successful deployment:
- ✅ No "package.json not found" errors
- ✅ Backend starts successfully
- ✅ MongoDB connection works
- ✅ API available at: https://patrick-furnitures.onrender.com

## 🧪 Test Your Deployment

1. Visit: https://patrick-furnitures.onrender.com/api/products
2. You should see: `[]` (empty array) or your products data
3. If you see JSON data, your backend is working!

## 🔧 Troubleshooting

### If deployment still fails:
1. Check that you typed the commands exactly as shown
2. Make sure there are no extra spaces
3. Verify the MongoDB URI is correct
4. Try the Docker approach (change language to "Docker")

### If you see "package.json not found":
- Double-check that Build Command is: `cd backend && npm install`
- Double-check that Start Command is: `cd backend && npm start`

## 📞 Need More Help?

If you're still having issues:
1. Take a screenshot of the error
2. Share the deployment logs
3. I'll help you troubleshoot further 