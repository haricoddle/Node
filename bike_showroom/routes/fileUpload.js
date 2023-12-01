const express = require('express');

const router = express.Router();
const jwtAuthenticate = require('../middleware/tokenAuthentication');
const fileUploadController = require('../controllers/fileUpload');
const multerMiddleware = require('../middleware/multer');
const permissionMiddleware = require('../middleware/tokenAuthentication');

router.put('/image', jwtAuthenticate.verifyToken, permissionMiddleware.verifyEditPermission, multerMiddleware.imageUpload.single('image'), multerMiddleware.imageErrorHandler, fileUploadController.uploadimage);

router.put('/file', jwtAuthenticate.verifyToken, permissionMiddleware.verifyEditPermission, multerMiddleware.fileUpload.single('file'), multerMiddleware.fileErrorHandler, fileUploadController.uploadFile);

router.put('/partsImage', jwtAuthenticate.verifyToken, permissionMiddleware.verifyEditPermission, multerMiddleware.imageUpload.single('image'), multerMiddleware.imageErrorHandler, fileUploadController.partsImage);

module.exports = router;
