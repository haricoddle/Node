const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const signController = require('../controllers/customer');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const permissionMiddleware = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/register', jwtAuthenticate.verifyToken, permissionMiddleware.verifyWritePermission, signController.createUser);

router.get('/login', signController.checkUser);

router.get('/search', jwtAuthenticate.verifyToken, permissionMiddleware.verifyReadPermission, signController.findUser);

router.delete('/delete', jwtAuthenticate.verifyToken, permissionMiddleware.verifyDeletePermission, signController.deleteUser);

router.get('/showAll', jwtAuthenticate.verifyToken, permissionMiddleware.verifyReadPermission, signController.showAllUser);

router.put('/editDetails', jwtAuthenticate.verifyToken, permissionMiddleware.verifyEditPermission, signController.updateUser);

module.exports = router;
