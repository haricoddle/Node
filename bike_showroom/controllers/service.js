const qer = require('../models/service');

const addService = async (req, res) => {
  const custId = req.body.cust_id;
  const vehicleId = req.body.vehicle_id;
  const { date } = req.body;
  const startTime = req.body.start_time;
  const issueFaced = req.body.issue_faced;
  const bookingStatus = req.body.booking_status;

  if (!custId || !vehicleId || !date || !issueFaced || !startTime || !bookingStatus) {
    res.status(400).send({ error: 'All feilds are required', success: false });
  }
  try {
    await qer.addServiceQuery(custId, vehicleId, date, issueFaced, startTime, bookingStatus);
    res.status(200).send({ success: 'Service booking added' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const updateService = async (req, res) => {
  const { date } = req.body;
  const { id } = req.body;

  if (!date) {
    res.status(400).send({ error: 'feild required', success: false });
  }
  try {
    await qer.updateServiceQuery(date, id);
    res.status(200).send({ success: 'Update added' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const deleteService = async (req, res) => {
  const { id } = req.body;
  const bookingStatus = req.body.booking_status;

  if (!id || !bookingStatus) {
    res.status(500).send({ error: 'Feild required', success: false });
  }
  try {
    await qer.deleteServiceQuery(id);
    res.status(200).send({ success: 'Service deleted' });
  } catch (err) {
    res.status(400).send({ error: 'Error occured', success: false });
  }
};

module.exports = {
  addService,
  updateService,
  deleteService,
};
