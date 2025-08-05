const fetch = require('node-fetch');

async function testServer() {
  try {
    console.log('Testing payment server...');
    
    // Test health endpoint
    const healthResponse = await fetch('http://localhost:5000/api/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test payment request endpoint (with test data)
    const paymentResponse = await fetch('http://localhost:5000/api/payment/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: '+250783722764',
        amount: 100,
        paymentMethod: 'momo',
        currency: 'RWF'
      })
    });
    
    if (paymentResponse.ok) {
      const paymentData = await paymentResponse.json();
      console.log('✅ Payment request test:', paymentData);
    } else {
      console.log('⚠️ Payment request test failed:', paymentResponse.status);
    }
    
  } catch (error) {
    console.log('❌ Server test failed:', error.message);
    console.log('\nTo fix this:');
    console.log('1. Make sure you have a .env file with API credentials');
    console.log('2. Run: npm run server');
    console.log('3. Check that port 5000 is available');
  }
}

testServer(); 