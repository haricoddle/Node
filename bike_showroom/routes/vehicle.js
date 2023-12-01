const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const bikeController = require('../controllers/vehicle');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const permissionMiddleware = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/show', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('read'), bikeController.showVehicles);

router.post('/addVehicle', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('write'), bikeController.addNewVehicle);

router.put('/updateVehicle', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('edit'), bikeController.updateVehicles);

router.get('/showAllVehicle', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('read'), bikeController.showAllVehicles);

module.exports = router;
