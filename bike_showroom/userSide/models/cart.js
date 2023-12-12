const con = require('../../config/dbConnect');

// eslint-disable-next-line consistent-return
async function addToCartQuery(custId, productId, quantity) {
  try {
    const qr = 'INSERT INTO cart(customer_id, product_id, quantity) VALUES(?, ?, ?);';
    const passedQuery = await con.query(qr, [custId, productId, quantity]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

// eslint-disable-next-line consistent-return
async function viewCartQuery(customerId) {
  try {
    const qr = `SELECT p.name, p.price, p.image_url, a.type
            FROM parts AS p
            LEFT JOIN accessories AS a ON p.accessory_id = a.id
            LEFT JOIN cart AS c ON p.id = c.product_id
            WHERE c.customer_id = ?;`;
    const passedQuery = con.query(qr, [customerId]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function getCartDetails(cartId) {
  try {
    const qr = 'SELECT * FROM cart WHERE id = ?;';
    const passedQuery = await con.promise().query(qr, [cartId]);
    return passedQuery[0];
  } catch (err) {
    console.log(err);
  }
}

async function updateCartQuery(id, quantity) {
  try {
    const qr = `UPDATE cart
            set quantity = ?
            WHERE id = ?;`;
    const passedQuery = await con.query(qr, [quantity, id]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function deleteCart(cartId) {
  try {
    const qr = 'DELETE FROM cart WHERE id = ?;';
    const passedQuery = await con.query(qr, [cartId]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function cartCheck(customerId) {
  try {
    const qr = `SELECT c.id, p.name, p.price, p.image_url, a.type, c.quantity
  FROM parts AS p
  LEFT JOIN accessories AS a ON p.accessory_id = a.id
  LEFT JOIN cart AS c ON p.id = c.product_id
  WHERE c.customer_id = ?;`;
    const passedQuery = con.query(qr, [customerId]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function stockCheck(productId) {
  try {
    const qr = `SELECT stock FROM parts 
              WHERE id = ?;`;
    const passedQuery = await con.query(qr, [productId]);
    return passedQuery[0];
  } catch (error) {
    return console.log(error);
  }
}

async function stockDecrement(decreValue, productId) {
  try {
    const qr = `UPDATE parts
              SET stock = ?
              WHERE id = ?;`;
    const passedQuery = await con.query(qr, [decreValue, productId]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function updateStock(updatedStockCount, productId) {
  try {
    const qr = `UPDATE parts
  SET stock = ?
  WHERE id = ?;`;
    const passedQuery = await con.query(qr, [updatedStockCount, productId]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
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
