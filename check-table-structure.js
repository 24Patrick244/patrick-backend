const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Patrick@24',
  database: process.env.DB_NAME || 'patrick_backend_db',
  port: process.env.DB_PORT || 3306,
});

async function checkTableStructure() {
  try {
    console.log('🔍 Checking existing table structure...');
    
    // Check products table structure
    const [columns] = await connection.promise().query('DESCRIBE products');
    console.log('📋 Products table columns:');
    columns.forEach(column => {
      console.log(`   - ${column.Field} (${column.Type}) ${column.Null === 'NO' ? 'NOT NULL' : 'NULL'}`);
    });
    
    // Check if table has any data
    const [count] = await connection.promise().query('SELECT COUNT(*) as count FROM products');
    console.log(`📦 Current products count: ${count[0].count}`);
    
    if (count[0].count > 0) {
      const [sample] = await connection.promise().query('SELECT * FROM products LIMIT 1');
      console.log('📝 Sample product structure:');
      console.log(sample[0]);
    }
    
  } catch (error) {
    console.error('❌ Error checking table structure:', error.message);
  } finally {
    connection.end();
  }
}

checkTableStructure(); 