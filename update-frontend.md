# Update Frontend to Use Deployed Backend

## After Your Backend is Deployed on Render

You'll get a URL like: `https://your-backend-name.onrender.com`

## Update Your React App

### 1. Update src/App.js
Replace this line:
```javascript
const API_URL = "http://localhost:5001/api/products";
```

With your Render URL:
```javascript
const API_URL = "https://your-backend-name.onrender.com/api/products";
```

### 2. Update src/components/AdminPanel.js
Replace this line:
```javascript
const API_URL = "http://localhost:5001/api/products";
```

With your Render URL:
```javascript
const API_URL = "https://your-backend-name.onrender.com/api/products";
```

## Test Your Setup

1. Start your React app: `npm start`
2. Go to Admin Panel
3. Add a product
4. Check if it appears on the products page
5. Edit or delete a product
6. Refresh the page - changes should persist!

## Your Website is Now Fully Dynamic!

- Any changes you make in the Admin Panel will be saved to the cloud database
- Your website will show the latest products from anywhere
- Changes persist across sessions and devices 