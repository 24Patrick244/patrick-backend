const mysql = require('mysql2');
require('dotenv').config();

// Test database connection
const testConnection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Patrick@24',
  database: process.env.DB_NAME || 'patrick_backend_db',
  port: process.env.DB_PORT || 3306,
});

async function testDatabaseConnection() {
  try {
    console.log('🔍 Testing database connection...');
    console.log('📊 Database: patrick_backend_db');
    console.log('👤 User: root');
    console.log('🔑 Password: Patrick@24');
    console.log('🌐 Host: localhost:3306');
    console.log('');

    // Test connection
    await testConnection.promise().connect();
    console.log('✅ Database connection successful!');

    // Test if products table exists
    const [tables] = await testConnection.promise().query('SHOW TABLES');
    console.log('📋 Available tables:');
    tables.forEach(table => {
      console.log(`   - ${Object.values(table)[0]}`);
    });

    // Test if products table has data
    const [products] = await testConnection.promise().query('SELECT COUNT(*) as count FROM products');
    console.log(`📦 Products in database: ${products[0].count}`);

    if (products[0].count > 0) {
      const [sampleProducts] = await testConnection.promise().query('SELECT id, name, price FROM products LIMIT 3');
      console.log('📝 Sample products:');
      sampleProducts.forEach(product => {
        console.log(`   - ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
      });
    }

    console.log('');
    console.log('🎉 Database is ready to use!');

  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('');
    console.log('🔧 Troubleshooting tips:');
    console.log('   1. Make sure MySQL server is running');
    console.log('   2. Verify the password is correct: Patrick@24');
    console.log('   3. Check if the database "patrick_backend_db" exists');
    console.log('   4. Ensure the user "root" has proper permissions');
  } finally {
    testConnection.end();
  }
}

testDatabaseConnection(); 