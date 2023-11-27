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

const incrementCart = async (req, res) => {
  const cartId = req.body.id;
  if (!cartId) {
    res.status(400).send({ error: 'All feild required', success: false });
  }
  try {
    const cartDetails = await qer.getCartDetails(cartId);
    // eslint-disable-next-line no-plusplus
    const itemQuantity = ++cartDetails[0].quantity;
    if (itemQuantity > 5) {
      res.status(500).send({ error: 'Max quantity reached', success: false });
      return;
    }
    await qer.updateCartQuery(cartId, itemQuantity);
    res.status(200).send({ success: 'Quantity Incremented' });
  } catch (err) {
    res.status(500).send({ error: 'error occured', success: false });
  }
};

const decrementCart = async (req, res) => {
  const cartId = req.body.id;
  if (!cartId) {
    res.status(400).send({ error: 'All feild required', success: false });
  }
  try {
    const cartDetails = await qer.getCartDetails(cartId);
    // eslint-disable-next-line no-plusplus
    const itemQuantity = --cartDetails[0].quantity;
    if (itemQuantity === 0) {
      await qer.deleteCart(cartId);
      res.status(200).send({ success: 'Quantity Decremented' });
    } else {
      await qer.updateCartQuery(cartId, itemQuantity);
      res.status(200).send({ success: 'Quantity Decremented' });
    }
  } catch (err) {
    res.status(500).send({ error: 'error occured', success: false });
  }
};

module.exports = {
  addToCart,
  updateCart,
  viewCart,
  incrementCart,
  decrementCart,
};
