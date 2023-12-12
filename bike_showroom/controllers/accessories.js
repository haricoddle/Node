const qer = require('../models/accessories');

const viewAccessories = async (req, res) => {
  try {
    const { page } = req.query;
    const { limit } = req.query;
    const startIndex = (page - 1) * limit;

    const result = await qer.showAllQuery(startIndex, limit);

    console.log(result);
    const pageNo = await qer.showPageNoQuery();
    const totalPage = Math.ceil(pageNo[0].count / limit);

    res.status(200).send({
      success: true,
      currentPage: page,
      totalPages: totalPage,
      data: result,
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const updateAccessories = async (req, res) => {
  try {
    const { id } = req.body;
    const { type } = req.body;

    if (!id || !type) {
      res.status(400).send({ error: 'All feilds required', success: false });
    }
    await qer.updateQuery(id, type);
    res.status(200).send({ message: 'Updated successfully', success: true });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const addAccessories = async (req, res) => {
  try {
    const vehicleId = req.body.vehicle_id;
    const { type } = req.body;

    if (!vehicleId || !type) {
      res.status(400).send({ error: 'All feilds are required', success: false });
    }

    await qer.addQuery(vehicleId, type);
    res.status(200).send({ message: 'New Item added', success: true });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', err, success: false });
  }
};

const deleteAccessories = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      res.status(400).send({ error: 'All feilds are required', success: false });
    }

    await qer.deleteQuery(id);
    res.status(200).send({ message: 'Item deleted', success: true });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const displayAll = async (req, res) => {
  try {
    const data = await qer.displayAllQuery();
    res.status(200).send({ result: data, success: true });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

module.exports = {
  viewAccessories,
  updateAccessories,
  addAccessories,
  deleteAccessories,
  displayAll,
};
