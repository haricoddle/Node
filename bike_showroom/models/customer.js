const con = require('../config/dbConnect');

async function signUpQuery(name, dob, phone, address, email, licenceNo, username, password) {
  const qr = `INSERT INTO customer (name, dob, phone, address, email, licence_no, username, password) VALUES ('${name}','${dob}','${phone}','${address}','${email}','${licenceNo}','${username}','${password}');`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function loginQuery(username, password) {
  const qr = `SELECT * FROM customer WHERE username = '${username}' AND password = '${password}';`;
  const passedQuery = await con.query(qr);
  return passedQuery[0];
}

async function searchQuery(custName) {
  const qr = `SELECT * FROM customer WHERE name = '${custName}';`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function deleteQuery(id) {
  const qr = `DELETE FROM customer WHERE id = ${id};`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function showAllQuery(startIndex, limit) {
  const qr = `SELECT * FROM customer LIMIT ${startIndex}, ${limit}`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function updateUserQuery(phoneNumber, id) {
  const qr = `UPDATE customer
            SET phone = ${phoneNumber}
            WHERE id = ${id};`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function showPageNoQuery() {
  const qr = 'SELECT COUNT(*) AS count FROM customer;';
  const passedQuery = await con.query(qr);
  return passedQuery;
}

module.exports = {
  signUpQuery,
  loginQuery,
  searchQuery,
  deleteQuery,
  showAllQuery,
  updateUserQuery,
  showPageNoQuery,
};
