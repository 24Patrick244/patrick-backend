# 🚀 Quick Start - Fix Network Error

## ❌ Problem: "NetworkError when attempting to fetch resource"

This error occurs because the **backend payment server is not running**.

## ✅ Solution: Start the Backend Server

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Environment File
Create a file named `.env` in your project root with this content:

```env
# Server Configuration
PORT=5000
BASE_URL=http://localhost:3000

# MTN Mobile Money API Configuration (Test)
MTN_API_URL=https://sandbox.momodeveloper.mtn.com
MTN_API_KEY=test_api_key
MTN_API_USER=test_api_user
MTN_TARGET_ENV=sandbox
MTN_SUBSCRIPTION_KEY=test_subscription_key
MTN_COLLECTION_PRIMARY_KEY=test_primary_key
MTN_COLLECTION_SECONDARY_KEY=test_secondary_key

# Tigo Cash API Configuration (Test)
TIGO_API_URL=https://api.tigo.com
TIGO_API_KEY=test_tigo_api_key
TIGO_MERCHANT_ID=test_merchant_id
TIGO_SECRET_KEY=test_secret_key

# Debug Mode
DEBUG=true
```

### Step 3: Start Both Servers
Open **TWO terminal windows**:

**Terminal 1 - Backend Server:**
```bash
npm run server
```
You should see: `Payment server running on port 5000`

**Terminal 2 - Frontend:**
```bash
npm start
```
You should see: `Local: http://localhost:3000`

### Step 4: Test Payment
1. Go to your website: http://localhost:3000
2. Add items to cart
3. Go to checkout
4. Select "Mobile Money" or "Tigo Cash"
5. Enter phone number
6. Click "Continue to Payment"

## 🔧 Alternative: Use Concurrently (Recommended)

Instead of two terminals, use one command:

```bash
npm run dev
```

This starts both frontend and backend automatically.

## 🚨 Troubleshooting

### If you still get network errors:

1. **Check if server is running:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Should return: `{"status":"OK","timestamp":"..."}`

2. **Check port availability:**
   - Make sure port 5000 is not used by another application
   - Try changing PORT in .env to 5001

3. **Check firewall:**
   - Allow Node.js through Windows firewall
   - Check antivirus settings

4. **Check dependencies:**
   ```bash
   npm install express cors axios body-parser dotenv
   ```

### Common Issues:

**"Module not found" errors:**
```bash
npm install
```

**"Port already in use" errors:**
Change PORT in .env to 5001 or 5002

**"Permission denied" errors:**
Run terminal as Administrator

## 🎯 Expected Behavior

When working correctly:

1. ✅ Backend server starts on port 5000
2. ✅ Frontend connects to backend
3. ✅ Payment requests are sent to API
4. ✅ Real payment notifications are sent to phone
5. ✅ Payment status is tracked in real-time

## 📞 Need Help?

If you're still having issues:

1. Check the console for specific error messages
2. Make sure both servers are running
3. Verify your .env file is in the project root
4. Try restarting both servers

---

**Note:** For real payments, you'll need actual API credentials from MTN and Tigo. The test credentials above will show the flow but won't send real payment requests. 