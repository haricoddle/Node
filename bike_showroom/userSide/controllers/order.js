/* eslint-disable no-await-in-loop */
const qer = require('../models/order');

const addOrder = async (req, res) => {
  const customerId = req.body.customer_id;
  try {
    const cartdetails = await qer.getCartDetails(customerId);
    // eslint-disable-next-line for-direction, no-plusplus
    for (let i = 0; i <= cartdetails.length - 1; i++) {
      const { quantity } = cartdetails[i];
      const productId = cartdetails[i].product_id;
      console.log(productId);
      try {
        const productPrice = await qer.getprice(productId);
        console.log(productPrice);
        const { price } = productPrice[0];
        const totalPrice = quantity * price;
        const { stock } = productPrice[0];
        try {
          const customerDetails = await qer.getCustomerDetails(customerId);
          const customerAddress = customerDetails[0].address;
          try {
            if (stock >= quantity) {
              await qer.addOrderOuery(productId, customerId, customerAddress, totalPrice, quantity);
            } else {
              res.status(500).send({ error: 'Not enough stock available' });
              return;
            }
            try {
              await qer.updateStock(productId, stock, quantity);
            } catch (err) {
              res.status(500).send({ error: 'Error occured on updating stock', err });
            }
          } catch (err) {
            res.status(500).send({ error: 'Error occured on adding orders', err });
          }
        } catch (err) {
          res.status(500).send({ error: 'Error occured in getting customer details', err });
        }
      } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Error occured in part details', err });
      }
    }
    try {
      await qer.deleteCartItems(customerId);
      res.status(200).send({ success: 'Orders added and changes updateed in cart and orders table' });
    } catch (err) {
      res.status(500).send({ error: 'Error occured in deleteing rows from cart', err });
    }
  } catch (err) {
    res.status(500).send({ error: 'Error occured in on fetching cart', err });
  }
};

module.exports = {
  addOrder,
};
