const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const accessController = require('../controllers/accessories');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/viewAll', jwtAuthenticate.verifyToken, accessController.viewAccessories);

router.put('/updateAccessory', jwtAuthenticate.verifyToken, accessController.updateAccessories);

router.post('/addAccessory', jwtAuthenticate.verifyToken, accessController.addAccessories);

router.delete('/deleteAccessory', jwtAuthenticate.verifyToken, accessController.deleteAccessories);

module.exports = router;