const con = require('../../config/dbConnect');

async function getCartDetails(customerId) {
  try {
    const qr = 'SELECT * FROM cart WHERE customer_id = ?;';
    const passedQuery = await con.query(qr, [customerId]);
    return passedQuery[0];
  } catch (error) {
    return console.log(error);
  }
}

async function getCustomerDetails(customerId) {
  try {
    const qr = 'SELECT * FROM customer WHERE id = ?;';
    const passedQuery = await con.query(qr, [customerId]);
    return passedQuery[0];
  } catch (error) {
    return console.log(error);
  }
}

async function addOrderOuery(productId, customerId, customerAddress, totalPrice, quantity) {
  try {
    const qr = 'INSERT INTO orders(part_id, cust_id, cust_address, price, quantity) VALUES(?, ?, ?, ?, ?);';
    // eslint-disable-next-line max-len
    const passedQuery = await con.query(qr, [productId, customerId, customerAddress, totalPrice, quantity]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function getprice(id) {
  try {
    const qr = 'SELECT * FROM parts WHERE id = ?;';
    const passedQuery = await con.query(qr, [id]);
    return passedQuery[0];
  } catch (error) {
    return console.log(error);
  }
}

async function updateStock(productId, stock, quantity) {
  try {
    const qr = `UPDATE parts
            SET stock = ? - ?
            WHERE id = ?;`;
    const passedQuery = await con.query(qr, [stock, quantity, productId]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function deleteCartItems(customerId) {
  try {
    const qr = `DELETE FROM cart 
              WHERE customer_id = ?;`;
    const passedQuery = await con.query(qr, [customerId]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function viewOrdersQuery(customerId, startIndex, limit) {
  try {
    const qr = `SELECT * FROM orders WHERE cust_id = ?
            LIMIT ?, ?;`;
    const passedQuery = await con.query(qr, [customerId, startIndex, parseInt(limit, 10)]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function showPageNoQuery() {
  try {
    const qr = 'SELECT COUNT(*) AS count FROM customer;';
    const passedQuery = await con.query(qr);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

module.exports = {
  getCartDetails,
  getCustomerDetails,
  addOrderOuery,
  getprice,
  updateStock,
  deleteCartItems,
  viewOrdersQuery,
  showPageNoQuery,
};
