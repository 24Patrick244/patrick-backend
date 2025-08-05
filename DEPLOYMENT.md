# 🚀 Patrick Furnitures - Deployment Guide

## 🌐 **Live Website Deployment**

Your Patrick Furnitures website is ready for deployment! Here are the steps to make it live on the internet.

## 📋 **Prerequisites**

1. **GitHub Account** (free)
2. **Netlify Account** (free)
3. **Vercel Account** (free)

## 🎯 **Deployment Steps**

### **Step 1: Push to GitHub**

1. **Create a GitHub repository:**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it: `patrick-furnitures`
   - Make it Public
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Patrick Furnitures website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/patrick-furnitures.git
   git push -u origin main
   ```

### **Step 2: Deploy Frontend to Netlify**

1. **Go to [Netlify.com](https://netlify.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New site from Git"**
4. **Choose GitHub** and select your `patrick-furnitures` repository
5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
6. **Click "Deploy site"**

### **Step 3: Deploy Backend to Vercel**

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure settings:**
   - Framework Preset: Node.js
   - Root Directory: `./`
   - Build Command: `npm install`
   - Output Directory: `build`
6. **Click "Deploy"**

### **Step 4: Update API URLs**

After deployment, update the API URLs in your code:

**In `src/components/AdminPanel.js`:**
```javascript
const API_BASE_URL = 'https://your-vercel-app.vercel.app';
```

**In `src/components/Checkout.js`:**
```javascript
const API_BASE_URL = 'https://your-vercel-app.vercel.app';
```

## 🌍 **Your Live URLs**

- **Frontend:** `https://your-site-name.netlify.app`
- **Backend:** `https://your-vercel-app.vercel.app`

## 🔧 **Environment Variables**

Set these in Netlify/Vercel dashboard:

```
NODE_ENV=production
REACT_APP_API_URL=https://your-vercel-app.vercel.app
```

## 📱 **Mobile Responsive**

Your website is already mobile-responsive and will work perfectly on:
- ✅ Desktop computers
- ✅ Laptops
- ✅ Tablets
- ✅ Mobile phones

## 🔒 **Security Features**

- ✅ Admin credentials hidden from public
- ✅ Secure payment processing
- ✅ HTTPS enabled
- ✅ Professional login system

## 🎨 **Features Available**

- ✅ **Product Catalog** with images
- ✅ **Shopping Cart** functionality
- ✅ **Mobile Money Payments** (MTN MoMo, Tigo Cash)
- ✅ **Admin Panel** with dashboard
- ✅ **Transaction History**
- ✅ **Visitor Tracking**
- ✅ **Product Management**
- ✅ **Receipt Generation**
- ✅ **WhatsApp Integration**

## 📞 **Support**

If you need help with deployment:
- **Email:** izabayopatrick24@gmail.com
- **WhatsApp:** +250783722764

## 🎉 **Congratulations!**

Once deployed, your Patrick Furnitures website will be:
- 🌐 **Accessible worldwide**
- 📱 **Mobile-friendly**
- 💳 **Payment-ready**
- 🔒 **Secure**
- ⚡ **Fast loading**

**Your furniture business is now online!** 🪑✨ 