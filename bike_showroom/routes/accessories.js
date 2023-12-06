const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const accessController = require('../controllers/accessories');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const permissionMiddleware = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/viewAll', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('read'), accessController.viewAccessories);

router.put('/updateAccessory', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('edit'), accessController.updateAccessories);

router.post('/addAccessory', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('write'), accessController.addAccessories);

router.delete('/deleteAccessory', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('delete'), accessController.deleteAccessories);

router.get('/dispAll', accessController.displayAll);

module.exports = router;
