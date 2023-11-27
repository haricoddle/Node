const con = require('../config/dbConnect');

async function addNewPartsQuery(accessoryId, name, price, stock, path) {
  const qr = `INSERT INTO parts(accessory_id, name, price, stock, image_url) VALUES(${accessoryId}, '${name}', ${price}, ${stock}, '${path}');`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  addNewPartsQuery,
};
