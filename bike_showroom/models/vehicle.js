/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function displayQuery(type) {
  try {
  const qr = `SELECT v.model_name, v.cc, v.price, v.color_id
            FROM vehicle AS v
            LEFT JOIN vehicle_type as t
            ON v.type_id = t.id
            WHERE t.type = ?;`;
  const passedQuery = await con.query(qr, [type]);
  return passedQuery;
  } } catch (err) {
    console.log(err);
  }


async function addVehicleQuery(typeId, modelName, cc, price, colorId) {
  try {
  const qr = 'INSERT INTO vehicle(type_id, model_name, cc, price, color_id) VALUES(?, ?, ?, ?, ?);';
  const passedQuery = await con.query(qr, [typeId, modelName, cc, price, colorId]);
  return passedQuery;
} catch (err) {
  console.log(err);
}
}

async function updateVehicleQuery(id, price) {
  try {
      const qr = `UPDATE vehicle
        SET price = ?
        WHERE id = ?;`;
  const passedQuery = await con.query(qr, [price, id]);
  return passedQuery;
} catch (err) {
  console.log(err);
}
}

async function showAllVehiclesQuery(startIndex, limit) {
  try {
  const qr = `SELECT * FROM vehicle
            LIMIT ?, ?;`;
  const passedQuery = await con.query(qr, [startIndex, parseInt(limit, 10)]);
  return passedQuery;
} catch (err) {
  console.log(err);
}
}

async function showPageNoQuery() {
  try {
  const qr = 'SELECT COUNT(*) AS count FROM vehicle;';
  const passedQuery = await con.query(qr);
  return passedQuery;
} catch (err) {
  console.log(err);
}
}

module.exports = {
  displayQuery,
  addVehicleQuery,
  updateVehicleQuery,
  showAllVehiclesQuery,
  showPageNoQuery,
};
