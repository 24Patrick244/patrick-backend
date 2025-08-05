const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Patrick@24',
  database: process.env.DB_NAME || 'patrick_backend_db',
  port: process.env.DB_PORT || 3306,
});

async function addSampleData() {
  try {
    console.log('🔧 Adding sample products to database...');
    
    const sampleProducts = [
      {
        name: 'Modern Wooden Chair',
        price: 199.99,
        description: 'Elegant modern wooden chair with ergonomic design',
        image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500'
      },
      {
        name: 'Leather Sofa',
        price: 899.99,
        description: 'Premium leather sofa with comfortable seating',
        image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'
      },
      {
        name: 'Dining Table',
        price: 599.99,
        description: 'Solid wood dining table for 6 people',
        image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500'
      },
      {
        name: 'Bedside Cabinet',
        price: 149.99,
        description: 'Compact bedside cabinet with drawer storage',
        image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500'
      },
      {
        name: 'Office Desk',
        price: 299.99,
        description: 'Modern office desk with built-in cable management',
        image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500'
      }
    ];
    
    for (const product of sampleProducts) {
      await connection.promise().query(
        'INSERT INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)',
        [product.name, product.price, product.description, product.image_url]
      );
      console.log(`✅ Added: ${product.name}`);
    }
    
    console.log('');
    console.log('🎉 Sample products added successfully!');
    
    // Show the count
    const [count] = await connection.promise().query('SELECT COUNT(*) as count FROM products');
    console.log(`📦 Total products in database: ${count[0].count}`);
    
  } catch (error) {
    console.error('❌ Error adding sample data:', error.message);
  } finally {
    connection.end();
  }
}

addSampleData(); 