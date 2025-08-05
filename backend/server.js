const express = require('express');
const cors = require('cors');
const db = require('../db');

const app = express();
app.use(cors());
app.use(express.json());

// REST API endpoints

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM products ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Add a new product
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, description, image_url } = req.body;
    const [result] = await db.promise().query(
      'INSERT INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)',
      [name, price, description, image_url]
    );
    
    // Fetch the newly created product
    const [newProduct] = await db.promise().query('SELECT * FROM products WHERE id = ?', [result.insertId]);
    res.json(newProduct[0]);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Edit a product
app.put('/api/products/:id', async (req, res) => {
  try {
    const { name, price, description, image_url } = req.body;
    const productId = req.params.id;
    
    await db.promise().query(
      'UPDATE products SET name = ?, price = ?, description = ?, image_url = ? WHERE id = ?',
      [name, price, description, image_url, productId]
    );
    
    // Fetch the updated product
    const [updatedProduct] = await db.promise().query('SELECT * FROM products WHERE id = ?', [productId]);
    res.json(updatedProduct[0]);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    await db.promise().query('DELETE FROM products WHERE id = ?', [productId]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Get a single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const [rows] = await db.promise().query('SELECT * FROM products WHERE id = ?', [productId]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
}); 