const qer = require('../models/bookings');

const addNewBooking = async (req, res) => {
  try {
    const customerName = req.body.customer_name;
    const phoneNo = req.body.phone_no;
    const { location } = req.body;
    const vehicleId = req.body.vehicle_id;
    if (!customerName || !phoneNo || !location || !vehicleId) {
      res.status(400).send({ error: 'All feild required', success: false });
    }
    const result = await qer.checkForBooking(customerName, phoneNo);
    if (result.length > 0) {
      res.status(409).send({ error: 'Booking already exist', success: false });
    }
    await qer.addNewBookingQuery(customerName, phoneNo, location, vehicleId);
    res.status(200).send({ success: 'Booking placed successfully.' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

module.exports = {
  addNewBooking,
};
