const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bikeController = require('../controllers/vehicle');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/showAll', jwtAuthenticate.verifyToken, bikeController.showAllVehicles);

router.post('/addVehicle', jwtAuthenticate.verifyToken, bikeController.addNewVehicle);

router.put('/updateVehicle', jwtAuthenticate.verifyToken, bikeController.updateVehicles);

module.exports = router;