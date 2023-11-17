/* eslint-disable linebreak-style */
const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hari',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = conn;
