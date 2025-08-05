const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Payment server is running!'
  });
});

// Test payment endpoint
app.post('/api/payment/request', (req, res) => {
  const { phoneNumber, amount, paymentMethod } = req.body;
  
  console.log('Payment request received:', { phoneNumber, amount, paymentMethod });
  
  res.json({
    success: true,
    referenceId: `TEST_${Date.now()}`,
    status: 'PENDING',
    message: 'Test payment request sent successfully'
  });
});

// Test payment status endpoint
app.get('/api/payment/status/:referenceId', (req, res) => {
  const { referenceId } = req.params;
  const { paymentMethod } = req.query;
  
  console.log('Status check:', { referenceId, paymentMethod });
  
  res.json({
    success: true,
    status: 'SUCCESSFUL',
    amount: 100,
    currency: 'RWF'
  });
});

app.listen(PORT, () => {
  console.log(`✅ Simple payment server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`💳 Payment API: http://localhost:${PORT}/api/payment/request`);
}); 