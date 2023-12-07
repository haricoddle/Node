/* eslint-disable no-await-in-loop */
const qer = require('../models/order');

const addOrder = async (req, res) => {
  const customerId = req.body.customer_id;
  if (!customerId) {
    res.status(400).send({ error: 'feild required' });
  }
  try {
    const cartdetails = await qer.getCartDetails(customerId);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= cartdetails.length - 1; i++) {
      const { quantity } = cartdetails[i];
      const productId = cartdetails[i].product_id;
      const productPrice = await qer.getprice(productId);
      const { price } = productPrice[0];
      const totalPrice = quantity * price;
      const { stock } = productPrice[0];
      const customerDetails = await qer.getCustomerDetails(customerId);
      const customerAddress = customerDetails[0].address;
      if (stock >= quantity) {
        await qer.addOrderOuery(productId, customerId, customerAddress, totalPrice, quantity);
      } else {
        res.status(500).send({ error: 'Not enough stock available' });
        return;
      }
      await qer.updateStock(productId, stock, quantity);
    }
    await qer.deleteCartItems(customerId);
    res.status(200).send({ success: 'Orders added and changes updated in cart and orders table' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const viewOrders = async (req, res) => {
  const { page } = req.query;
  const { limit } = req.query;
  const startIndex = (page - 1) * limit;
  const customerId = req.body.customer_id;
  if (!customerId) {
    res.status(400).send({ error: 'Feild required', success: false });
  }
  try {
    const data = await qer.viewOrdersQuery(customerId, startIndex, limit);
    const pageNo = await qer.showPageNoQuery();
    const totalPage = Math.ceil(pageNo[0][0].count / limit);
    res.status(200).send({ totalPage, currentPage: page, success: data[0] });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

module.exports = {
  addOrder,
  viewOrders,
};
