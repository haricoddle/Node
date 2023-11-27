const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const cartController = require('../controllers/cart');
const jwtAuthenticate = require('../../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/addToCart', jwtAuthenticate.verifyToken, cartController.addToCart);

router.put('/editCart', jwtAuthenticate.verifyToken, cartController.updateCart);

router.get('/showCart', jwtAuthenticate.verifyToken, cartController.viewCart);

router.put('/addQuantity', jwtAuthenticate.verifyToken, cartController.incrementCart);

router.put('/deleteQuantity', jwtAuthenticate.verifyToken, cartController.decrementCart);

module.exports = router;
