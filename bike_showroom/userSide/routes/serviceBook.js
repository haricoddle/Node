const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();
const userServiceController = require('../controllers/serviceBook');
const jwtAuthenticate = require('../../middleware/tokenAuthentication');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/userBooking', jwtAuthenticate.verifyToken, userServiceController.addService);

module.exports = router;