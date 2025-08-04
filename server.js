// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ CONNECT TO MYSQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Patrick@24', // ⛔ Replace with your actual MySQL root password
  database: 'patrick_furnitures'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// ✅ SAMPLE TEST ROUTE
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// ✅ GET PRODUCTS FROM DATABASE (Example)
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products'; // Make sure this table exists!
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Failed to fetch products:', err);
      res.status(500).send('Server error');
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
