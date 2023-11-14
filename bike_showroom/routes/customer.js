const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const signController = require('../controllers/customer');
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const jsonParser = bodyParser.json();
router.use(jsonParser)

router.post('/register',jwtAuthenticate.verifyToken, signController.createUser);

router.get('/login',signController.checkUser);

router.get('/search', jwtAuthenticate.verifyToken, signController.findUser);

router.delete('/delete', jwtAuthenticate.verifyToken, signController.deleteUser)

module.exports = router;