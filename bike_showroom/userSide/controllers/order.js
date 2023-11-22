const qer = require('../models/order');

// eslint-disable-next-line no-unused-vars
const addOrder = async (req, res) => {
  const cartId = req.body.id;
  try {
    const cartdetails = await qer.getCartDetails(cartId);
    const customerId = cartdetails[0].customer_id;
    const { quantity } = cartdetails[0];
    const productId = cartdetails[0].product_id;
    try {
      const productPrice = await qer.getprice(productId);
      const { price } = productPrice[0];
      const totalPrice = quantity * price;
      try {
        const customerDetails = await qer.getCustomerDetails(customerId);
        const customerAddress = customerDetails[0].address;
        try {
          await qer.addOrderOuery(productId, customerId, customerAddress, totalPrice, quantity);
          res.status(200).send({ success: 'Order added successfully' });
        } catch (err) {
          res.status(500).send({ error: 'Error occured', success: false });
        }
      } catch (err) {
        res.status(500).send({ error: 'Error occured', success: false });
      }
    } catch (err) {
      res.status(500).send({ error: 'Error occured', success: false });
    }
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

module.exports = {
  addOrder,
};
