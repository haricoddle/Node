const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const serviceController = require('../controllers/service');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const permissionMiddleware = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/booking', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('write'), serviceController.addService);

router.put('/update', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('edit'), serviceController.updateService);

router.delete('/delete', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('delete'), serviceController.deleteService);

module.exports = router;
