# Visual Render Deployment Guide

## 🎯 Step-by-Step Visual Instructions

### Step 1: Open Render Dashboard
1. **Open your browser**
2. **Go to:** https://dashboard.render.com/
3. **Sign in** with your email and password
4. **You'll see your dashboard with services**

### Step 2: Find Your Service
1. **Look for:** `patrick-furnitures` in the list
2. **Click on it** - it will open the service page
3. **You'll see tabs at the top:** Overview, Logs, Events, Settings, etc.

### Step 3: Go to Settings
1. **Click the "Settings" tab** (usually 4th tab)
2. **Scroll down** until you see "Build & Deploy" section
3. **You'll see fields for Build Command and Start Command**

### Step 4: Update Build Command
1. **Find the "Build Command" field**
2. **Click inside the text box**
3. **Select all text** (Ctrl+A)
4. **Delete it** (Backspace)
5. **Type exactly:** `cd backend && npm install`
6. **Make sure there are no extra spaces**

### Step 5: Update Start Command
1. **Find the "Start Command" field**
2. **Click inside the text box**
3. **Select all text** (Ctrl+A)
4. **Delete it** (Backspace)
5. **Type exactly:** `cd backend && npm start`
6. **Make sure there are no extra spaces**

### Step 6: Add Environment Variable
1. **Scroll down** to "Environment Variables" section
2. **Click "+ Add Environment Variable"** button
3. **In the "Key" field, type:** `MONGODB_URI`
4. **In the "Value" field, type:** `mongodb+srv://patrick-furnitures-admin:Patrick%4024@cluster0.ashifhg.mongodb.net/patrick-furnitures?retryWrites=true&w=majority&appName=Cluster0`
5. **Click "Add Environment Variable"**

### Step 7: Save Changes
1. **Scroll to the bottom** of the settings page
2. **Look for "Save Changes" button**
3. **Click it**
4. **Wait for confirmation** (usually a green checkmark)

### Step 8: Redeploy
1. **Click the "Manual Deploy" tab** (usually 3rd tab)
2. **Click "Deploy latest commit"** button
3. **Watch the deployment logs** appear

## ✅ What You Should See

### During Deployment:
- ✅ "Uploading build..."
- ✅ "Build successful"
- ✅ "Deploying..."
- ✅ "Running 'cd backend && npm start'"
- ✅ "Backend server running on port 5001"

### After Deployment:
- ✅ Green "Live" status
- ✅ No red error messages
- ✅ Your service URL working

## 🧪 Test Your Deployment

1. **Copy your service URL:** https://patrick-furnitures.onrender.com
2. **Add `/api/products`** to the end
3. **Visit:** https://patrick-furnitures.onrender.com/api/products
4. **You should see:** `[]` or your products data

## 🔧 If Something Goes Wrong

### If you see "package.json not found":
- Go back to Settings
- Double-check Build Command is: `cd backend && npm install`
- Double-check Start Command is: `cd backend && npm start`

### If deployment fails:
- Check the deployment logs
- Make sure you typed the commands exactly
- Try the Docker approach (change language to "Docker")

## 📱 Quick Reference

**Build Command:** `cd backend && npm install`
**Start Command:** `cd backend && npm start`
**Environment Variable:** `MONGODB_URI` = your MongoDB connection string 

---

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/patrick-furnitures', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  currency: String,
  category: String,
  stock: Number,
  description: String,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

// REST API endpoints

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Add a new product
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Edit a product
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Use the port provided by Render, or 10000 locally
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});
```

---

## **Next Steps After Pasting the Code**

### **1. Save the file as `server-backend.js`**

### **2. Commit and Push to GitHub**
Open your terminal in your project folder and run:
```sh
<code_block_to_apply_changes_from>
```

### **3. Wait for Render to Redeploy**
- Go to your [Render dashboard](https://dashboard.render.com/)
- Watch the deploy logs for success

### **4. Test Your Backend**
- Visit: [https://patrick-furnitures.onrender.com/api/products](https://patrick-furnitures.onrender.com/api/products)
- You should see `[]` (empty array) or your products

### **5. Test Your Website**
- Go to: [https://patrickfurnitures.netlify.app](https://patrickfurnitures.netlify.app)
- Try to add a product in the admin panel
- Refresh the products page and see if it appears

---

**If you see any errors, copy the error message or screenshot and send it here.  
If everything works, you’re DONE! 🎉**

Let me know if you need help with any step! 

---

## **The Problem: Wrong Port**

Render assigns a random port via the `PORT` environment variable and expects your app to listen on that port.  
**You are hardcoding port 10000, so Render cannot connect to your app.**

---

## **How to Fix It:**

### **1. Update Your `server-backend.js`**

**Find this line:**
```js
const PORT = process.env.PORT || 10000;
```
**You must use ONLY `process.env.PORT` on Render.**  
But your code is correct as long as you do NOT set the `PORT` environment variable yourself in Render.

**However, your logs show:**
```
Backend server running on port 10000
```
This means `process.env.PORT` is NOT set, so your app is defaulting to 10000.

---

### **2. What to Do in Render:**

- **DO NOT** set a custom `PORT` environment variable in your Render dashboard.
- **Remove** any `PORT` environment variable you may have set in the Render dashboard.

---

### **3. Double-Check Your Code**

Your code should be:
```js
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
```
**Do NOT set `PORT=10000` in your Render environment variables!**

---

### **4. Redeploy**

- After removing the `PORT` environment variable (if it exists), redeploy your service.

---

### **5. What You Should See**

- In the logs, you should see something like:
  ```
  Backend server running on port 12345
  ```
  (where 12345 is a random port assigned by Render, NOT 10000)

- Now, your backend will be accessible at:  
  [https://patrick-furnitures.onrender.com/api/products](https://patrick-furnitures.onrender.com/api/products)

---

## **Summary of Steps:**

1. **Remove any `PORT` environment variable** from your Render service settings.
2. **Redeploy** your backend.
3. **Check the logs**—the port should NOT be 10000.
4. **Test your backend URL.**

---

**If you do this and still have issues, let me know what port shows up in your logs after redeploying!** 

---

## **Let's Check Your Current Logs**

Since your environment variables look correct, let's see what's happening in your latest deployment:

1. **Go to the "Logs" tab** in your Render dashboard
2. **Look for the most recent deployment** (should be after your last code push)
3. **Check what port number is shown** in the logs

**What to look for:**
- Does it still say `Backend server running on port 10000`?
- Are there any error messages?
- Is the deployment successful?

---

## **If You Still See Port 10000**

This means Render is not setting the `PORT` environment variable properly. Let's try a different approach:

### **Option 1: Force Render to Set the Port**
Add this to your `package.json` in the "scripts" section:
```json
"start": "PORT=$PORT node server-backend.js"
```

### **Option 2: Update Your Server Code**
Change your `server-backend.js` to:
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/patrick-furnitures', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  currency: String,
  category: String,
  stock: Number,
  description: String,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

// REST API endpoints

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Add a new product
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Edit a product
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Force Render to use the correct port
const PORT = process.env.PORT || 10000;
console.log('Environment PORT:', process.env.PORT);
console.log('Using PORT:', PORT);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Server is listening on all interfaces (0.0.0.0)`);
});
```

---

## **What to Do:**

1. **Update both files** (package.json and server-backend.js)
2. **Commit and push** to GitHub
3. **Wait for deployment**
4. **Check the logs** - you should see:
   - `Environment PORT: [some number]` (not undefined)
   - `Using PORT: [some number]` (not 10000)

**Let me know what you see in the logs after this deployment!** 

---

## **Problem 1: Files Not Added to Git**

The error shows that your files weren't added. Let's fix this:

```bash
# Add all the files you changed
git add package.json server-backend.js VISUAL_DEPLOYMENT_GUIDE.md backend/package-lock.json backend/package.json

# Or add everything at once
git add .
```

---

## **Problem 2: Wrong GitHub Repository URL**

The error shows it's trying to connect to `izabayopatrick24/patrick-furnitures` but your actual repository is `24Patrick244/patrick-furnitures`.

Let's fix this:

```bash
<code_block_to_apply_changes_from>
```

---

## **Complete Fix Commands:**

Run these commands one by one:

```bash
# 1. Add all files
git add .

# 2. Commit the changes
git commit -m "Fix Render port issue and backend config"

# 3. Set correct remote URL
git remote set-url origin https://github.com/24Patrick244/patrick-furnitures.git

# 4. Push to GitHub
git push origin main
```

---

## **What You Should See:**

After running these commands, you should see:
- ✅ Files added successfully
- ✅ Commit created
- ✅ Files pushed to the correct repository
- ✅ No "Repository not found" errors

---

## **If You Still Get Authentication Errors:**

1. **Open your browser**
2. **Go to GitHub** and sign in
3. **Authorize the Git client** when prompted
4. **Try the push command again**

---

**Run these commands and let me know what happens!**

---

✅ **Done!**  
I have added your "Dinning set" product directly to your frontend code in `src/data/products.js`.

---

## **What Happens Next?**

- The new product will now appear in your gallery and products page.
- The image is set to a placeholder URL. If you want to use your own hosted image, upload it to a service (like Imgur, Dropbox, or your own server) and replace the `image` URL in the code.

---

## **How to See the Product:**

1. **Save and commit your changes** if you haven't already:
   ```sh
   git add src/data/products.js
   git commit -m "Add Dinning set product to gallery"
   git push origin main
   ```
2. **Redeploy your frontend** (Netlify, Vercel, etc.) if needed.
3. **Visit your website** and check the products/gallery page.

---

**You should now see your Dinning set product in your gallery!  
If you want to use a different image URL, just let me know or upload it somewhere and I’ll update the code for you.**
