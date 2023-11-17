/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const serviceController = require('../controllers/service');
const jwtAuthenticate = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/booking', jwtAuthenticate.verifyToken, serviceController.addService);

router.put('/update', jwtAuthenticate.verifyToken, serviceController.updateService);

router.delete('/delete', jwtAuthenticate.verifyToken, serviceController.deleteService);

module.exports = router;
