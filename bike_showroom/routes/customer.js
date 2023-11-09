const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const signController = require('../controllers/customer')
const jsonParser = bodyParser.json();
router.use(jsonParser)

router.post('/register', signController.createUser);

router.get('/login', signController.checkUser);

router.get('/search', signController.findUser);

router.delete('/delete', signController.deleteUser)

module.exports = router;