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
    console.log(err);
    res.status(500).send({ error: 'Error occured', err: `${err}` });
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

const partsImage = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      res.status(400).send({ error: 'feild required', success: false });
    }

    qer.partImageQuery(id, req.file.path);
    res.status(200).send({
      success: 'File uploaded successfully',
      path: req.res.path,
      profile_url: `http://localhost:3000/profile/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

module.exports = {
  uploadimage,
  uploadFile,
  partsImage,
};
