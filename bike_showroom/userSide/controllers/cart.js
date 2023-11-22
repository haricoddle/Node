const qer = require('../models/cart');

const addToCart = async (req, res) => {
  const custId = req.body.customer_id;
  const productId = req.body.product_id;
  const { quantity } = req.body;
  if (!custId || !productId || !quantity) {
    res.status(400).send({ error: 'All feilds required', success: false });
  }
  try {
    await qer.addToCartQuery(custId, productId, quantity);
    res.status(200).send({ success: 'Added to cart successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', err });
  }
};

module.exports = {
  addToCart,
};
