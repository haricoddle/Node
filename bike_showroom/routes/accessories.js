const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const accessController = require('../controllers/accessories');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const permissionMiddleware = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/viewAll', permissionMiddleware.verifyReadPermission, accessController.viewAccessories);

router.put('/updateAccessory', jwtAuthenticate.verifyToken, permissionMiddleware.verifyEditPermission, accessController.updateAccessories);

router.post('/addAccessory', jwtAuthenticate.verifyToken, permissionMiddleware.verifyWritePermission, accessController.addAccessories);

router.delete('/deleteAccessory', jwtAuthenticate.verifyToken, permissionMiddleware.verifyDeletePermission, accessController.deleteAccessories);

module.exports = router;
