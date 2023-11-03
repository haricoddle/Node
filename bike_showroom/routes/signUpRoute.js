const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const signController = require('../controllers/signUp')
const jsonParser = bodyParser.json();
router.use(jsonParser)

router.post('/', signController.createUser);

module.exports = router;