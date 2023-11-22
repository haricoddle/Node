const con = require('../../config/dbConnect');

async function getCartDetails(cartId) {
  const qr = `SELECT * FROM cart WHERE id = ${cartId};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

async function getCustomerDetails(customerId) {
  const qr = `SELECT * FROM customer WHERE id = ${customerId};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

async function addOrderOuery(productId, customerId, customerAddress, totalPrice, quantity) {
  const qr = `INSERT INTO orders(part_id, cust_id, cust_address, price, quantity) VALUES(${productId}, ${customerId}, '${customerAddress}', ${totalPrice}, ${quantity});`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function getprice(id) {
  const qr = `SELECT price FROM parts WHERE id = ${id};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

module.exports = {
  getCartDetails,
  getCustomerDetails,
  addOrderOuery,
  getprice,
};
