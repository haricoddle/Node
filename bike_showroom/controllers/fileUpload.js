const qer = require('../models/fileUpload');

const uploadimage = async (req, res) => {
  try {
    qer.imageUploadOuery(req.file.path);
    res.status(200).send({
      success: 'Image upload successfully',
      path: req.file.path,
      profile_url: `http://localhost:3000/profile/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', err });
  }
};

const uploadFile = async (req, res) => {
  try {
    qer.fileUploadOuery(req.file.path);
    res.status(200).send({
      success: 'File upload successfully',
      path: req.file.path,
      profile_url: `http://localhost:3000/profile/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', err });
  }
};

module.exports = {
  uploadimage,
  uploadFile,
};
