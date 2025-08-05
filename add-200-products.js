const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Patrick@24',
  database: process.env.DB_NAME || 'patrick_backend_db',
  port: process.env.DB_PORT || 3306,
});

const furnitureProducts = [
  // Chairs (40 products)
  { name: 'Modern Wooden Chair', price: 199.99, description: 'Elegant modern wooden chair with ergonomic design', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'Leather Office Chair', price: 299.99, description: 'Premium leather office chair with adjustable height', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Dining Room Chair', price: 89.99, description: 'Classic dining room chair with upholstered seat', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Accent Armchair', price: 249.99, description: 'Stylish accent armchair for living room', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },
  { name: 'Bar Stool', price: 79.99, description: 'Modern bar stool with comfortable seating', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },
  { name: 'Folding Chair', price: 45.99, description: 'Portable folding chair for events', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'Rocking Chair', price: 179.99, description: 'Traditional wooden rocking chair', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Bean Bag Chair', price: 59.99, description: 'Comfortable bean bag chair for kids', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Gaming Chair', price: 199.99, description: 'Ergonomic gaming chair with lumbar support', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },
  { name: 'Wingback Chair', price: 399.99, description: 'Elegant wingback chair with tufted back', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },

  // Sofas (30 products)
  { name: 'Leather Sofa', price: 899.99, description: 'Premium leather sofa with comfortable seating', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },
  { name: 'Fabric Sofa', price: 699.99, description: 'Soft fabric sofa in neutral colors', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'Sectional Sofa', price: 1299.99, description: 'Large sectional sofa for family rooms', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Loveseat', price: 449.99, description: 'Compact loveseat for small spaces', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Sleeper Sofa', price: 799.99, description: 'Convertible sleeper sofa for guests', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },

  // Tables (35 products)
  { name: 'Dining Table', price: 599.99, description: 'Solid wood dining table for 6 people', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },
  { name: 'Coffee Table', price: 199.99, description: 'Modern coffee table with storage', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'End Table', price: 89.99, description: 'Small end table for living room', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Console Table', price: 299.99, description: 'Elegant console table for entryway', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Kitchen Table', price: 399.99, description: 'Rustic kitchen table with benches', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },

  // Beds (25 products)
  { name: 'Queen Size Bed', price: 799.99, description: 'Elegant queen size bed frame', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'King Size Bed', price: 999.99, description: 'Luxurious king size bed frame', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Twin Bed', price: 399.99, description: 'Compact twin bed for children', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Bunk Bed', price: 599.99, description: 'Space-saving bunk bed for kids', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },
  { name: 'Platform Bed', price: 649.99, description: 'Modern platform bed with headboard', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },

  // Storage (30 products)
  { name: 'Bedside Cabinet', price: 149.99, description: 'Compact bedside cabinet with drawer storage', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Dresser', price: 399.99, description: 'Large dresser with multiple drawers', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'Wardrobe', price: 899.99, description: 'Full-size wardrobe with hanging space', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Bookshelf', price: 199.99, description: 'Tall bookshelf for home library', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },
  { name: 'Chest of Drawers', price: 299.99, description: 'Classic chest of drawers', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },

  // Office Furniture (20 products)
  { name: 'Office Desk', price: 299.99, description: 'Modern office desk with built-in cable management', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Computer Desk', price: 249.99, description: 'Computer desk with keyboard tray', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'Standing Desk', price: 399.99, description: 'Adjustable standing desk for health', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Filing Cabinet', price: 179.99, description: 'Metal filing cabinet for documents', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },
  { name: 'Office Chair', price: 199.99, description: 'Ergonomic office chair with wheels', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' },

  // Outdoor Furniture (20 products)
  { name: 'Patio Table', price: 299.99, description: 'Weather-resistant patio dining table', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500' },
  { name: 'Garden Bench', price: 199.99, description: 'Wooden garden bench for outdoor seating', image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500' },
  { name: 'Adirondack Chair', price: 149.99, description: 'Classic Adirondack chair for porch', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500' },
  { name: 'Hammock', price: 89.99, description: 'Relaxing hammock for backyard', image_url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500' },
  { name: 'Outdoor Sofa', price: 599.99, description: 'Weatherproof outdoor sofa set', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500' }
];

// Generate variations to reach 200 products
const generateProducts = () => {
  const allProducts = [];
  const variations = [
    { suffix: ' - Oak', priceModifier: 1.1 },
    { suffix: ' - Walnut', priceModifier: 1.2 },
    { suffix: ' - Cherry', priceModifier: 1.15 },
    { suffix: ' - Mahogany', priceModifier: 1.3 },
    { suffix: ' - Pine', priceModifier: 0.9 },
    { suffix: ' - White', priceModifier: 1.05 },
    { suffix: ' - Black', priceModifier: 1.05 },
    { suffix: ' - Gray', priceModifier: 1.0 },
    { suffix: ' - Beige', priceModifier: 1.0 },
    { suffix: ' - Brown', priceModifier: 1.0 }
  ];

  furnitureProducts.forEach(product => {
    // Add original product
    allProducts.push(product);
    
    // Add variations
    variations.forEach(variation => {
      allProducts.push({
        name: product.name + variation.suffix,
        price: Math.round(product.price * variation.priceModifier * 100) / 100,
        description: product.description + ' Available in ' + variation.suffix.replace(' - ', '') + ' finish.',
        image_url: product.image_url
      });
    });
  });

  return allProducts.slice(0, 200); // Ensure exactly 200 products
};

async function add200Products() {
  try {
    console.log('🔧 Adding 200 furniture products to database...');
    
    const products = generateProducts();
    
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      await connection.promise().query(
        'INSERT INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)',
        [product.name, product.price, product.description, product.image_url]
      );
      
      if ((i + 1) % 20 === 0) {
        console.log(`✅ Added ${i + 1} products...`);
      }
    }
    
    console.log('');
    console.log('🎉 Successfully added 200 products!');
    
    // Show the final count
    const [count] = await connection.promise().query('SELECT COUNT(*) as count FROM products');
    console.log(`📦 Total products in database: ${count[0].count}`);
    
  } catch (error) {
    console.error('❌ Error adding products:', error.message);
  } finally {
    connection.end();
  }
}

add200Products(); 