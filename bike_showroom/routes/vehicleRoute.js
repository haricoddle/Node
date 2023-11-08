const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bikeController = require('../controllers/vehicleController');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/showAll', bikeController.showAllVehicles);

router.post('/addVehicle', bikeController.addNewVehicle);

router.put('/updateVehicle', bikeController.updateVehicles);

module.exports = router;