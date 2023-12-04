/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function displayQuery(type) {
  const qr = `SELECT v.model_name, v.cc, v.price, v.color_id
            FROM vehicle AS v
            LEFT JOIN vehicle_type as t
            ON v.type_id = t.id
            WHERE t.type = '${type}';`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function addVehicleQuery(typeId, modelName, cc, price, colorId) {
  const qr = `INSERT INTO vehicle(type_id, model_name, cc, price, color_id) VALUES(${typeId},'${modelName}', ${cc}, ${price}, ${colorId});`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function updateVehicleQuery(id, price) {
  const qr = `UPDATE vehicle
        SET price = ${price}
        WHERE id = ${id};`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function showAllVehiclesQuery(startIndex, limit) {
  const qr = `SELECT * FROM vehicle
            LIMIT ${startIndex}, ${limit};`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function showPageNoQuery() {
  const qr = 'SELECT COUNT(*) AS count FROM vehicle;';
  const passedQuery = await con.query(qr);
  return passedQuery;
}

module.exports = {
  displayQuery,
  addVehicleQuery,
  updateVehicleQuery,
  showAllVehiclesQuery,
  showPageNoQuery,
};
