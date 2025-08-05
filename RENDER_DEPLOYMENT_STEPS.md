# 🚀 Render Deployment Guide for Patrick Furnitures

## 📋 Prerequisites
- GitHub account with your code pushed
- Render.com account (free)
- MySQL database (PlanetScale, Railway, or AWS RDS)

## 🗄️ Step 1: Set Up MySQL Database

### Option A: PlanetScale (Recommended - Free)
1. Go to [planetscale.com](https://planetscale.com)
2. Sign up and create a new database
3. Get your connection string
4. Note down: host, user, password, database name

### Option B: Railway MySQL
1. Go to [railway.app](https://railway.app)
2. Create new project
3. Add MySQL database service
4. Get connection details from dashboard

## 🌐 Step 2: Deploy Backend to Render

### 2.1 Connect to Render
1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository

### 2.2 Configure Web Service
- **Name:** `patrick-furnitures-backend`
- **Environment:** `Node`
- **Region:** Choose closest to you
- **Branch:** `main` (or your default branch)
- **Root Directory:** Leave empty (or `/` if needed)
- **Build Command:** `npm install`
- **Start Command:** `npm start`

### 2.3 Set Environment Variables
Click "Environment" tab and add:

```env
NODE_ENV=production
PORT=10000
DB_HOST=your-mysql-host
DB_USER=your-mysql-user
DB_PASSWORD=your-mysql-password
DB_NAME=patrick_backend_db
DB_PORT=3306
```

### 2.4 Deploy
1. Click "Create Web Service"
2. Wait for build to complete (2-3 minutes)
3. Your API will be available at: `https://your-app-name.onrender.com`

## 🎨 Step 3: Deploy Frontend to Netlify

### 3.1 Update API URLs
Before deploying, update your frontend to use the Render backend:

```javascript
// In src/App.js
const API_URL = "https://your-app-name.onrender.com/api/products";

// In src/components/AdminPanel.js
const API_URL = "https://your-app-name.onrender.com/api/products";
```

### 3.2 Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Connect your repository
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Root directory:** Leave empty (or `/` if needed)

## 🔧 Step 4: Test Your Deployment

### 4.1 Test Backend API
```bash
# Test health endpoint
curl https://your-app-name.onrender.com/health

# Test products endpoint
curl https://your-app-name.onrender.com/api/products
```

### 4.2 Test Frontend
1. Visit your Netlify URL
2. Browse products
3. Test admin panel
4. Test cart functionality

## 📊 Step 5: Monitor and Maintain

### 5.1 Render Dashboard
- Monitor logs in Render dashboard
- Check deployment status
- View environment variables

### 5.2 Database Management
- Monitor database connections
- Set up regular backups
- Check query performance

## 🆘 Troubleshooting

### Common Issues:

#### Build Fails
- Check if all dependencies are in package.json
- Verify Node.js version compatibility
- Check build logs in Render dashboard

#### Database Connection Fails
- Verify environment variables are set correctly
- Check if database is accessible from Render
- Test connection locally first

#### CORS Errors
- Update CORS configuration in backend
- Add your frontend URL to allowed origins

#### API Not Responding
- Check if service is running in Render dashboard
- Verify PORT environment variable
- Check application logs

## ✅ Success Checklist

- [ ] MySQL database set up and accessible
- [ ] Backend deployed to Render successfully
- [ ] Environment variables configured
- [ ] API endpoints responding correctly
- [ ] Frontend updated with new API URLs
- [ ] Frontend deployed to Netlify
- [ ] All features working in production
- [ ] Health check endpoint responding
- [ ] Products loading correctly
- [ ] Admin panel functional

## 🎉 Your Live Application

Once deployed, your Patrick Furnitures application will be available at:
- **Frontend:** `https://your-app-name.netlify.app`
- **Backend API:** `https://your-app-name.onrender.com`
- **Health Check:** `https://your-app-name.onrender.com/health`

## 📞 Need Help?

1. Check Render documentation: [render.com/docs](https://render.com/docs)
2. Check build logs in Render dashboard
3. Verify environment variables are set correctly
4. Test API endpoints individually

Your Patrick Furnitures application is now live and ready for customers! 🚀 