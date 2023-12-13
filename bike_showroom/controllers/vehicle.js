const qer = require('../models/vehicle');

const showVehicles = async (req, res) => {
  try {
    const { type } = req.body;

    if (!type) {
      res.status(400).send({ error: 'Feild required', success: false });
    }

    const result = await qer.displayQuery(type);
    res.status(200).send({ success: result[0] });
  } catch (err) {
    res.status(400).send({ error: 'Error occured', success: false });
  }
};

const addNewVehicle = async (req, res) => {
  try {
    const typeId = req.body.type_id;
    const modelName = req.body.model_name;
    const { cc } = req.body;
    const { price } = req.body;
    const colorId = req.body.color_id;

    if (!typeId || !modelName || !cc || !price || !colorId) {
      res.status(400).send({ error: 'All feilds are required', success: false });
    }

    await qer.addVehicleQuery(typeId, modelName, cc, price, colorId);
    res.status(200).send({ success: 'Vehicle added successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const updateVehicles = async (req, res) => {
  try {
    const { id } = req.body;
    const { price } = req.body;

    if (!id || !price) {
      res.status(400).send({ error: 'All feilds are required', success: false });
    }

    await qer.updateVehicleQuery(id, price);
    res.status(200).send({ success: 'Vehicle updated successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const showAllVehicles = async (req, res) => {
  try {
    const { page } = req.query;
    const { limit } = req.query;
    const startIndex = (page - 1) * limit;

    const result = await qer.showAllVehiclesQuery(startIndex, limit);
    const pageNo = await qer.showPageNoQuery();

    const totalPage = Math.ceil(pageNo[0][0].count / limit);
    res.status(200).send({
      success: true, currentPage: page, pages: totalPage, data: result,
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured,', success: false });
  }
};

const addNew = async (req, res) => {
  try {
    const typeId = req.query.type_id;
    const modelName = req.query.model_name;
    const { cc } = req.query;
    const { price } = req.query;
    const colorId = req.query.color_id;

    if (!typeId || !modelName || !cc || !price || !colorId) {
      res.status(400).send({ error: 'All feild required', success: false });
    }
    await qer.addNewQuery(typeId, modelName, cc, price, colorId, req.file.filename);
    res.status(200).send({
      success: 'Added item successfully',
      image_url: `http://localhost:3000/profile/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', succ: false });
  }
};

module.exports = {
  showVehicles,
  addNewVehicle,
  updateVehicles,
  showAllVehicles,
  addNew,
};
