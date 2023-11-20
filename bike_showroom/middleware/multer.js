/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    // eslint-disable-next-line no-undef
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 2000000 },
});

// eslint-disable-next-line consistent-return
function errorHandler(err, req, res, next) {
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

module.exports = {
  upload,
  errorHandler,
};
