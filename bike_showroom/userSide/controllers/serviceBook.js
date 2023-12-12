/* eslint-disable linebreak-style */
const qer = require('../models/serviceBook');

const addService = async (req, res) => {
  try {
    const custId = req.body.cust_id;
    const vehicleId = req.body.vehicle_id;
    const { date } = req.body;
    const startTime = req.body.start_time;
    const issueFaced = req.body.issue_faced;
    const bookingStatus = req.body.booking_status;

    if (!custId || !vehicleId || !date || !startTime || !issueFaced || !bookingStatus) {
      res.status(400).send({ error: 'All feilds required', success: false });
    }
    const result = await qer.checkTimeQuery(date, startTime);
    if (result.length > 0) {
      res.status(500).send({ error: 'Time slot booked already', success: false });
    } else {
      try {
        await qer.addServiceQuery(custId, vehicleId, date, startTime, issueFaced, bookingStatus);
        res.status(200).send({ success: 'Service added' });
      } catch (err) {
        res.status(500).send({ error: 'Error Occured', success: false, err });
      }
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const viewService = async (req, res) => {
  try {
    const { date } = req.body;

    if (!date) {
      res.status(400).send({ error: 'Feild required', success: false });
    }
    const data = await qer.viewBookingQuery(date);
    res.status(200).send({ success: data[0] });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const cancelService = async (req, res) => {
  try {
    const { date } = req.body;
    const bookingStatus = req.body.booking_status;

    if (!date || !bookingStatus) {
      res.status(400).send({ error: 'All feilds required', success: false });
    }
    await qer.cancelServiceQuery(date, bookingStatus);
    res.status(200).send({ success: 'Booking canceled' });
  } catch (err) {
    res.status(500).send({ error: 'Error Occured', success: false });
  }
};

module.exports = {
  addService,
  viewService,
  cancelService,
};
