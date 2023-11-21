// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');

const imageStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/image');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});
const imageUpload = multer({
  storage: imageStorageEngine,
  limits: { fileSize: 2048000 },

});

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/pdf');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});
const fileUpload = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 5000000 },
});

// eslint-disable-next-line consistent-return
function imageErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        error: 'File size limit exceeded (2MB max)',
        success: false,
      });
    }
    return res.status(500).json({
      error: err.message,
      success: false,
    });
  }
  next(err);
}

// eslint-disable-next-line consistent-return
function fileErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        error: 'File size limit exceeded (5MB max)',
        success: false,
      });
    }
    return res.status(500).json({
      error: err.message,
      success: false,
    });
  }
  next(err);
}

module.exports = {
  imageUpload,
  fileUpload,
  imageErrorHandler,
  fileErrorHandler,
};
