# MongoDB to MySQL Migration Guide

## Overview
This guide will help you complete the migration from MongoDB to MySQL for your Patrick Furnitures application.

## Prerequisites
1. MySQL Server installed and running
2. Node.js and npm installed
3. Your existing project files

## Step 1: Install MySQL Dependencies
The following dependencies have been updated in your `package.json`:
- ✅ `mysql2` - MySQL client for Node.js
- ✅ `dotenv` - Environment variable management
- ❌ Removed `mongoose` and `mongodb` dependencies

## Step 2: Configure MySQL Database

### 2.1 Update Environment Variables
Create a `.env` file in your project root with the following:

```env
# MySQL Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_actual_mysql_password
DB_NAME=patrick_backend_db
DB_PORT=3306

# Server Configuration
PORT=5001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### 2.2 Set Up Database
Run the setup script to create the database and tables:

```bash
node setup-mysql.js
```

This will:
- Create the `patrick_backend_db` database
- Create the `products` table with proper schema
- Insert sample product data

## Step 3: Database Schema

### Products Table Structure
```sql
CREATE TABLE products (
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
);
```

## Step 4: API Endpoints

The following API endpoints have been updated to work with MySQL:

### GET /api/products
- **Purpose**: Fetch all products
- **Response**: Array of product objects
- **SQL**: `SELECT * FROM products ORDER BY created_at DESC`

### POST /api/products
- **Purpose**: Add a new product
- **Body**: `{ name, price, currency, category, stock, description, image }`
- **Response**: Newly created product object
- **SQL**: `INSERT INTO products (...) VALUES (...)`

### PUT /api/products/:id
- **Purpose**: Update an existing product
- **Body**: `{ name, price, currency, category, stock, description, image }`
- **Response**: Updated product object
- **SQL**: `UPDATE products SET ... WHERE id = ?`

### DELETE /api/products/:id
- **Purpose**: Delete a product
- **Response**: `{ success: true }`
- **SQL**: `DELETE FROM products WHERE id = ?`

### GET /api/products/:id
- **Purpose**: Fetch a single product by ID
- **Response**: Product object or 404 error
- **SQL**: `SELECT * FROM products WHERE id = ?`

## Step 5: Key Changes Made

### 5.1 Server Files Updated
- ✅ `server-backend.js` - Main server file
- ✅ `backend/server.js` - Backend server file
- ✅ `db.js` - Database connection configuration

### 5.2 Dependencies Updated
- ✅ `package.json` - Removed MongoDB, added MySQL
- ✅ `backend/package.json` - Updated backend dependencies

### 5.3 New Files Created
- ✅ `create_tables.sql` - SQL schema file
- ✅ `setup-mysql.js` - Database setup script
- ✅ `env.example` - Environment variables template

## Step 6: Testing the Migration

### 6.1 Start the Server
```bash
npm start
```

### 6.2 Test API Endpoints
You can test the endpoints using curl or Postman:

```bash
# Get all products
curl http://localhost:5001/api/products

# Add a new product
curl -X POST http://localhost:5001/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Chair","price":299.99,"currency":"USD","category":"Chairs","stock":5,"description":"Test description","image":"https://example.com/test.jpg"}'

# Get a specific product
curl http://localhost:5001/api/products/1

# Update a product
curl -X PUT http://localhost:5001/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Chair","price":399.99,"currency":"USD","category":"Chairs","stock":3,"description":"Updated description","image":"https://example.com/updated.jpg"}'

# Delete a product
curl -X DELETE http://localhost:5001/api/products/1
```

## Step 7: Frontend Compatibility

The frontend should work seamlessly with the new MySQL backend because:
- All API endpoints maintain the same structure
- Response formats are identical
- Product IDs are now integers instead of MongoDB ObjectIds

## Step 8: Deployment Considerations

### 8.1 Environment Variables
Make sure to set the following environment variables in your deployment platform:
- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `DB_PORT`

### 8.2 Database Setup
For production deployment, you'll need to:
1. Set up a MySQL database (e.g., AWS RDS, PlanetScale, Railway)
2. Run the setup script or manually create tables
3. Update environment variables with production database credentials

## Troubleshooting

### Common Issues

1. **Connection Error**: Check MySQL server is running and credentials are correct
2. **Database Not Found**: Run `node setup-mysql.js` to create the database
3. **Permission Denied**: Ensure MySQL user has proper permissions
4. **Port Already in Use**: Change the PORT in your .env file

### Error Messages
- `ER_ACCESS_DENIED_ERROR`: Check username and password
- `ECONNREFUSED`: Check if MySQL server is running
- `ER_BAD_DB_ERROR`: Database doesn't exist, run setup script

## Migration Complete! 🎉

Your application has been successfully migrated from MongoDB to MySQL. The API endpoints remain the same, so your frontend should continue working without any changes.

## Next Steps
1. Test all API endpoints
2. Update your frontend if needed
3. Deploy to your preferred hosting platform
4. Set up production database
5. Configure environment variables for production 