const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const signController = require('../controllers/employee');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/register', jwtAuthenticate.verifyToken, signController.createEmployee);

// router.post('/updateEmp', signController.updateEmployee);
module.exports = router;