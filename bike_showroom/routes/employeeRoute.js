const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const signController = require('../controllers/eSignUp');
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post('/register', signController.createEmployee);

// router.post('/updateEmp', signController.updateEmployee);
module.exports = router;