const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Patrick@24',  // 🔁 Replace with your actual MySQL root password
  database: 'patrick_furnitures'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database');
});

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Patrick Backend is Running!');
});

// Get all products
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Error fetching products:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// ✅ POST a new product
app.post('/products', (req, res) => {
  const { name, description, price, image_url } = req.body;

  if (!name || !price || !image_url) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = 'INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)';
  const values = [name, description || '', price, image_url];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('❌ Error inserting product:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: '✅ Product added successfully', productId: result.insertId });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
