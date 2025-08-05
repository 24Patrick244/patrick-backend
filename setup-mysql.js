const mysql = require('mysql2');
require('dotenv').config();

// Create connection without database first
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Patrick@24',
  port: process.env.DB_PORT || 3306,
});

// SQL commands to set up the database
const setupCommands = [
  'CREATE DATABASE IF NOT EXISTS patrick_backend_db',
  'USE patrick_backend_db',
  `CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    category VARCHAR(100),
    stock INT DEFAULT 0,
    description TEXT,
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )`,
  `INSERT INTO products (name, price, currency, category, stock, description, image) VALUES
    ('Modern Wooden Chair', 199.99, 'USD', 'Chairs', 10, 'Elegant modern wooden chair with ergonomic design', 'https://example.com/chair1.jpg'),
    ('Leather Sofa', 899.99, 'USD', 'Sofas', 5, 'Premium leather sofa with comfortable seating', 'https://example.com/sofa1.jpg'),
    ('Dining Table', 599.99, 'USD', 'Tables', 8, 'Solid wood dining table for 6 people', 'https://example.com/table1.jpg'),
    ('Bedside Cabinet', 149.99, 'USD', 'Cabinets', 15, 'Compact bedside cabinet with drawer storage', 'https://example.com/cabinet1.jpg')
  ON DUPLICATE KEY UPDATE name = name`
];

async function setupDatabase() {
  try {
    console.log('🔧 Setting up MySQL database...');
    
    for (let i = 0; i < setupCommands.length; i++) {
      const command = setupCommands[i];
      console.log(`Executing: ${command.substring(0, 50)}...`);
      
      await connection.promise().query(command);
    }
    
    console.log('✅ Database setup completed successfully!');
    console.log('📊 Sample products have been added to the database.');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error);
  } finally {
    connection.end();
  }
}

setupDatabase(); 