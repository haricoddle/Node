/* eslint-disable consistent-return */
const con = require('../config/dbConnect');

async function showAllQuery(startIndex, limit) {
  try {
    const qr = 'SELECT * FROM accessories LIMIT ?, ?;';
    const passedQuery = await con.query(qr, [startIndex, parseInt(limit, 10)]);
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

async function updateQuery(id, type) {
  try {
    const qr = 'UPDATE accessories SET type = ? WHERE id = ?;';
    const passedQuery = await con.query(qr, [type, id]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function addQuery(vehicleId, type) {
  try {
    const qr = 'INSERT INTO accessories(vehicle_id, type) VALUES(?, ?);';
    const passedQuery = await con.query(qr, [vehicleId, type]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function deleteQuery(id) {
  try {
    const qr = 'DELETE FROM accessories WHERE id = ?;';
    const passedQuery = await con.query(qr, [id]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function displayAllQuery() {
  try {
    const qr = 'SELECT * FROM parts';
    const passedQuery = await con.query(qr);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  showAllQuery,
  showPageNoQuery,
  updateQuery,
  addQuery,
  deleteQuery,
  displayAllQuery,
};
