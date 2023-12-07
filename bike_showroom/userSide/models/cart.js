const con = require('../../config/dbConnect');

async function addToCartQuery(custId, productId, quantity) {
  const qr = `INSERT INTO cart(customer_id, product_id, quantity) VALUES(${custId}, ${productId}, ${quantity});`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function viewCartQuery(customerId) {
  const qr = `SELECT p.name, p.price, p.image_url, a.type
            FROM parts AS p
            LEFT JOIN accessories AS a ON p.accessory_id = a.id
            LEFT JOIN cart AS c ON p.id = c.product_id
            WHERE c.customer_id = ${customerId};`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

async function getCartDetails(cartId) {
  const qr = `SELECT * FROM cart WHERE id = ${cartId};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

async function updateCartQuery(id, quantity) {
  const qr = `UPDATE cart
            set quantity = ${quantity}
            WHERE id = ${id};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function deleteCart(cartId) {
  const qr = `DELETE FROM cart WHERE id = ${cartId};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function cartCheck(customerId) {
  const qr = `SELECT c.id, p.name, p.price, p.image_url, a.type, c.quantity
            FROM parts AS p
            LEFT JOIN accessories AS a ON p.accessory_id = a.id
            LEFT JOIN cart AS c ON p.id = c.product_id
            WHERE c.customer_id = ${customerId};`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

async function stockCheck(productId) {
  const qr = `SELECT stock FROM parts 
              WHERE id = ${productId};`;
  const passedQuery = await con.query(qr);
  return passedQuery[0];
}

async function stockDecrement(decreValue, productId) {
  const qr = `UPDATE parts
              SET stock = ${decreValue}
              WHERE id = ${productId};`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

async function updateStock(updatedStockCount, productId) {
  const qr = `UPDATE parts
              SET stock = ${updatedStockCount}
              WHERE id = ${productId};`;
  const passedQuery = await con.query(qr);
  return passedQuery;
}

module.exports = {
  addToCartQuery,
  updateCartQuery,
  viewCartQuery,
  getCartDetails,
  deleteCart,
  cartCheck,
  stockCheck,
  stockDecrement,
  updateStock,
};
