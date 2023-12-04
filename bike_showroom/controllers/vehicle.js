const qer = require('../models/vehicle');

const showVehicles = async (req, res) => {
  const { type } = req.body;

  if (!type) {
    res.status(400).send({ error: 'Feild required', success: false });
  }
  try {
    const result = await qer.displayQuery(type);
    res.status(200).send({ success: result[0] });
  } catch (err) {
    res.status(400).send({ error: 'Error occured', success: false });
  }
};

const addNewVehicle = async (req, res) => {
  const typeId = req.body.type_id;
  const modelName = req.body.model_name;
  const { cc } = req.body;
  const { price } = req.body;
  const colorId = req.body.color_id;

  if (!typeId || !modelName || !cc || !price || !colorId) {
    res.status(400).send({ error: 'All feilds are required', success: false });
  }
  try {
    await qer.addVehicleQuery(typeId, modelName, cc, price, colorId);
    res.status(200).send({ success: 'Vehicle added successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const updateVehicles = async (req, res) => {
  const { id } = req.body;
  const { price } = req.body;

  if (!id || !price) {
    res.status(400).send({ error: 'All feilds are required', success: false });
  }
  try {
    await qer.updateVehicleQuery(id, price);
    res.status(200).send({ success: 'Vehicle updated successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const showAllVehicles = async (req, res) => {
  const { page } = req.query;
  const { limit } = req.query;
  const startIndex = (page - 1) * limit;

  try {
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

module.exports = {
  showVehicles,
  addNewVehicle,
  updateVehicles,
  showAllVehicles,
};
