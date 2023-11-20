/* eslint-disable linebreak-style */
const express = require('express');
const fileUploadController = require('../controllers/fileUpload');

const multerMiddleware = require('../middleware/multer');

const router = express.Router();

router.put('/single', multerMiddleware.upload.single('image'), multerMiddleware.errorHandler, fileUploadController.uploadSingleFile);

router.put('/singlefile', multerMiddleware.upload.single('file'), multerMiddleware.errorHandler, fileUploadController.uploadSinglePdf);

module.exports = router;
