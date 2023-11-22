const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const orderController = require('../controllers/order');
const jwtAuthenticate = require('../../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/addOrder', jwtAuthenticate.verifyToken, orderController.addOrder);

module.exports = router;
