const con = require('../../config/dbConnect');

async function addToCartQuery(custId, productId, quantity) {
  const qr = `INSERT INTO cart(customer_id, product_id, quantity) VALUES(${custId}, ${productId}, ${quantity});`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function updateCartQuery(id, quantity) {
  const qr = `UPDATE cart
            set quantity = ${quantity}
            WHERE id = ${id};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  addToCartQuery,
  updateCartQuery,
};
