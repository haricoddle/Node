/* eslint-disable consistent-return */
const con = require('../config/dbConnect');

async function addNewPartsQuery(accessoryId, name, price, stock, path) {
  try {
    const qr = 'INSERT INTO parts(accessory_id, name, price, stock, image_url) VALUES(?, ?, ?, ?, ?);';
    const passedQuery = con.query(qr, [accessoryId, name, price, stock, path]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addNewPartsQuery,
};
