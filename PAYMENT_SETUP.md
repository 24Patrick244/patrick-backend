# Payment API Integration Setup Guide

## 🚀 Real Mobile Money & Tigo Cash Integration

This guide will help you set up real payment notifications for your Patrick Furnitures website.

## 📋 Prerequisites

### 1. MTN Mobile Money API Access
- **Developer Account**: Register at [MTN MoMo Developer Portal](https://momodeveloper.mtn.com)
- **API Credentials**: Get your API keys and subscription keys
- **Merchant Account**: Apply for a merchant account with MTN

### 2. Tigo Cash API Access
- **Business Account**: Contact Tigo Business for API access
- **Merchant ID**: Get your merchant identification
- **API Keys**: Obtain API keys and secret keys

## 🔧 Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Environment Configuration
1. Copy `env.example` to `.env`
2. Fill in your API credentials:

```env
# Server Configuration
PORT=5000
BASE_URL=http://localhost:3000

# MTN Mobile Money API Configuration
MTN_API_URL=https://sandbox.momodeveloper.mtn.com
MTN_API_KEY=your_actual_mtn_api_key
MTN_API_USER=your_actual_mtn_api_user
MTN_TARGET_ENV=sandbox
MTN_SUBSCRIPTION_KEY=your_actual_mtn_subscription_key
MTN_COLLECTION_PRIMARY_KEY=your_actual_mtn_collection_primary_key
MTN_COLLECTION_SECONDARY_KEY=your_actual_mtn_collection_secondary_key

# Tigo Cash API Configuration
TIGO_API_URL=https://api.tigo.com
TIGO_API_KEY=your_actual_tigo_api_key
TIGO_MERCHANT_ID=your_actual_tigo_merchant_id
TIGO_SECRET_KEY=your_actual_tigo_secret_key
```

### Step 3: Start the Application
```bash
# Start both frontend and backend
npm run dev

# Or start them separately
npm run server  # Backend on port 5000
npm start       # Frontend on port 3000
```

## 🔐 API Credentials Setup

### MTN Mobile Money
1. **Visit**: https://momodeveloper.mtn.com
2. **Register**: Create a developer account
3. **Create App**: Register your application
4. **Get Credentials**:
   - API Key
   - API User
   - Subscription Key
   - Collection Primary/Secondary Keys

### Tigo Cash
1. **Contact**: Tigo Business Support
2. **Apply**: Request API access for your business
3. **Get Credentials**:
   - API Key
   - Merchant ID
   - Secret Key

## 🧪 Testing

### Sandbox Testing
- Use sandbox environment for testing
- Test with provided test phone numbers
- Verify payment flows without real money

### Production Deployment
- Change `MTN_TARGET_ENV` to `live`
- Update API URLs to production endpoints
- Ensure SSL certificates are configured

## 📱 Payment Flow

### 1. User Selects Payment Method
- Mobile Money (MoMo) or Tigo Cash
- Enters phone number with country code

### 2. Payment Request
- Backend sends payment request to provider
- User receives notification on their phone
- Payment status is tracked in real-time

### 3. Payment Confirmation
- User approves payment on their phone
- Backend receives confirmation
- Order is completed automatically

## 🔍 API Endpoints

### Payment Request
```
POST /api/payment/request
{
  "phoneNumber": "+250783722764",
  "amount": 850,
  "paymentMethod": "momo",
  "currency": "USD"
}
```

### Payment Status Check
```
GET /api/payment/status/{referenceId}?paymentMethod=momo
```

### Payment Callbacks
```
POST /api/payment/callback/momo
POST /api/payment/callback/tigo
```

## 🛡️ Security Considerations

### Environment Variables
- Never commit `.env` file to version control
- Use different credentials for development/production
- Rotate API keys regularly

### API Security
- Validate all input data
- Implement rate limiting
- Use HTTPS in production
- Monitor API usage

## 🚨 Troubleshooting

### Common Issues

1. **API Connection Failed**
   - Check API credentials
   - Verify network connectivity
   - Ensure correct API endpoints

2. **Payment Not Received**
   - Verify phone number format
   - Check payment provider status
   - Review API response logs

3. **Status Polling Issues**
   - Check server logs
   - Verify reference ID format
   - Ensure proper error handling

### Debug Mode
Enable debug logging by setting:
```env
DEBUG=true
```

## 📞 Support

### MTN Mobile Money
- **Developer Portal**: https://momodeveloper.mtn.com
- **Documentation**: Available in developer portal
- **Support**: Developer community forums

### Tigo Cash
- **Business Support**: Contact Tigo Business directly
- **Technical Support**: Available through merchant portal

## 🔄 Updates

Keep your integration updated:
- Monitor API version changes
- Update dependencies regularly
- Test with new features
- Review security updates

## 📊 Monitoring

### Payment Analytics
- Track successful/failed payments
- Monitor API response times
- Log payment attempts
- Generate payment reports

### Error Tracking
- Log all API errors
- Monitor payment failures
- Track user feedback
- Implement alerting

---

**Note**: This integration requires approval from both MTN and Tigo. Contact their business development teams for official API access and merchant accounts. 