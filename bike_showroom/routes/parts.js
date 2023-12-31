const express = require('express');

const router = express.Router();
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const multerMiddleware = require('../middleware/multer');
const partController = require('../controllers/parts');
const permissionMiddleware = require('../middleware/tokenAuthentication');

router.post('/addParts', jwtAuthenticate.verifyToken, permissionMiddleware.verifyPermission('write'), multerMiddleware.imageUpload.single('image'), multerMiddleware.imageErrorHandler, partController.addNewParts);

module.exports = router;
