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

const updateCart = async (req, res) => {
  const { id } = req.body;
  const { quantity } = req.body;
  if (!id || !quantity) {
    res.status(400).send({ error: 'All feilds required', success: false });
  }
  try {
    await qer.updateCartQuery(id, quantity);
    res.status(200).send({ success: 'Cart Updated' });
  } catch (error) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const viewCart = async (req, res) => {
  const customerId = req.body.customer_id;
  if (!customerId) {
    res.status(400).send({ error: 'All feilds required' });
  }
  try {
    const data = await qer.viewCartQuery(customerId);
    res.status(200).send({ success: data[0] });
  } catch (err) {
    res.status(500).send({ error: 'Error occured' });
  }
};

module.exports = {
  addToCart,
  updateCart,
  viewCart,
};
