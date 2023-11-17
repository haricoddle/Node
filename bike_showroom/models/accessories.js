/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function showAllQuery(startIndex, limit) {
  const qr = `SELECT * FROM accessories
            LIMIT ${startIndex}, ${limit};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function showPageNoQuery() {
  const qr = 'SELECT COUNT(*) AS count FROM customer;';
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function updateQuery(id, type) {
  const qr = `UPDATE accessories
            SET type = '${type}'
            WHERE id = ${id};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function addQuery(vehicleId, type) {
  const qr = `INSERT INTO accessories(vehicle_id, type) VALUES(${vehicleId}, '${type}');`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function deleteQuery(id) {
  const qr = `DELETE FROM accessories WHERE id = ${id};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  showAllQuery,
  showPageNoQuery,
  updateQuery,
  addQuery,
  deleteQuery,
};
