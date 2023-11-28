const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const bookController = require('../controllers/bookings');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/newBookings', bookController.addNewBooking);

module.exports = router;
