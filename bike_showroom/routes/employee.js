const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const signController = require('../controllers/employee');
const permissionMiddleware = require('../middleware/tokenAuthentication');
const jwtAuthenticate = require('../middleware/tokenAuthentication');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/empLogin', signController.checkUser);

router.post('/register', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('write'), signController.createEmployee);

router.get('/serachEmp', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('read'), signController.serachUser);

module.exports = router;
