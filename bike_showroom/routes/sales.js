const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const saleController = require('../controllers/sales');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/newSale', saleController.addSale);



module.exports = router;