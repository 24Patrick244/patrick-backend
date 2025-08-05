# 🎯 Simple Render Deployment - No Backend Folder Issue

## ✅ Updated Settings for Render:

### Build Command:
```
npm install
```

### Start Command:
```
npm start
```

### Environment Variable:
**Key:** `MONGODB_URI`
**Value:** `mongodb+srv://patrick-furnitures-admin:Patrick%4024@cluster0.ashifhg.mongodb.net/patrick-furnitures?retryWrites=true&w=majority&appName=Cluster0`

## 🎯 What I Fixed:

1. **Moved backend files to root** - No more `cd backend` needed
2. **Updated package.json** - Includes all backend dependencies
3. **Simplified commands** - Just `npm install` and `npm start`

## 🚀 Go to Render and Update:

1. **Go to your service settings**
2. **Change Build Command to:** `npm install`
3. **Change Start Command to:** `npm start`
4. **Add the MONGODB_URI environment variable**
5. **Redeploy**

## ⏱️ This Will Work Because:

- ✅ No more `cd backend` commands
- ✅ All files are in the root directory
- ✅ Dependencies are properly listed
- ✅ MongoDB connection is configured

**Update your Render settings with these simpler commands!** 🎉 