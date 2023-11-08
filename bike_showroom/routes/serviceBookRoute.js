const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const serviceController = require('../controllers/serviceController');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/booking', serviceController.addService);

router.put('/update', serviceController.updateService);

router.delete('/delete', serviceController.deleteService);

module.exports = router;