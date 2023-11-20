/* eslint-disable linebreak-style */
const qer = require('../models/fileUpload');

const uploadSingleFile = (req, res) => {
  try {
    qer.fileUploadQuery(req.file.path);
    res.status(200).send({ success: 'File Uploaded successfully', path: req.file.path });
  } catch (err) {
    res.status(500).send({ error: 'Error occured' });
  }
};

const uploadSinglePdf = (req, res) => {
  try {
    qer.uploadSinglePdfQuery(req.file.path);
    res.status(200).send({ success: 'File uploaded successfully', path: req.file.path });
  } catch (err) {
    res.status(500).send({ error: 'error occured' });
  }
};

module.exports = {
  uploadSingleFile,
  uploadSinglePdf,
};
