/* eslint-disable consistent-return */
const con = require('../config/dbConnect');

async function signUpQuery(name, dob, phone, address, email, licenceNo, username, password) {
  try {
    const qr = 'INSERT INTO customer (name, dob, phone, address, email, licence_no, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';
    // eslint-disable-next-line max-len
    const passedQuery = await con.query(qr, [name, dob, phone, address, email, licenceNo, username, password]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function loginQuery(username, password) {
  try {
    const qr = 'SELECT * FROM customer WHERE username = ? AND password = ?;';
    const passedQuery = await con.query(qr, [username, password]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function searchQuery(custName) {
  try {
    const qr = `SELECT * FROM customer WHERE name = '${custName}';`;
    const passedQuery = await con.query(qr);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function deleteQuery(id) {
  try {
    const qr = 'DELETE FROM customer WHERE id = ?;';
    const passedQuery = await con.query(qr, [id]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function showAllQuery(startIndex, limit) {
  try {
    const qr = 'SELECT * FROM customer LIMIT ?, ?';
    const passedQuery = await con.query(qr, [startIndex, parseInt(limit, 10)]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function updateUserQuery(phoneNumber, id) {
  try {
    const qr = 'UPDATE customer SET phone = ? WHERE id = ?;';
    const passedQuery = await con.query(qr, [phoneNumber, id]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function showPageNoQuery() {
  try {
    const qr = 'SELECT COUNT(*) AS count FROM customer;';
    const passedQuery = await con.query(qr);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
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
