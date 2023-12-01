const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const saleController = require('../controllers/sales');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const permissionMiddleware = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/newSale', jwtAuthenticate.verifyToken, permissionMiddleware.verifyWritePermission, saleController.addSale);

module.exports = router;
