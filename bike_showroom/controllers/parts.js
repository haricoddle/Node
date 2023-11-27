const qer = require('../models/parts');

const addNewParts = async (req, res) => {
  const accessoryId = req.query.accessory_id;
  const { name } = req.query;
  const { price } = req.query;
  const { stock } = req.query;
  try {
    await qer.addNewPartsQuery(accessoryId, name, price, stock, req.file.path);
    res.status(200).send({
      success: 'Added item successfully',
      image_url: `http://localhost:3000/profile/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured' });
  }
};

module.exports = {
  addNewParts,
};
