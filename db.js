const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password', // replace with your actual MySQL password
  database: 'patrick_backend_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

module.exports = db;
