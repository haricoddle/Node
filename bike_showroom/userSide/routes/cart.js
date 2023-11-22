const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const cartController = require('../controllers/cart');
const jwtAuthenticate = require('../../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/addToCart', jwtAuthenticate.verifyToken, cartController.addToCart);

router.put('/editCart', jwtAuthenticate.verifyToken, cartController.updateCart);

module.exports = router;
