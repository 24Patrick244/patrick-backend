-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS patrick_backend_db;
USE patrick_backend_db;

-- Create products table
CREATE TABLE IF NOT EXISTS products (
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

-- Insert some sample data
INSERT INTO products (name, price, currency, category, stock, description, image) VALUES
('Modern Wooden Chair', 199.99, 'USD', 'Chairs', 10, 'Elegant modern wooden chair with ergonomic design', 'https://example.com/chair1.jpg'),
('Leather Sofa', 899.99, 'USD', 'Sofas', 5, 'Premium leather sofa with comfortable seating', 'https://example.com/sofa1.jpg'),
('Dining Table', 599.99, 'USD', 'Tables', 8, 'Solid wood dining table for 6 people', 'https://example.com/table1.jpg'),
('Bedside Cabinet', 149.99, 'USD', 'Cabinets', 15, 'Compact bedside cabinet with drawer storage', 'https://example.com/cabinet1.jpg'); 