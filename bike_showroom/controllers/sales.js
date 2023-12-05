const qer = require('../models/sales');

const addSale = async (req, res) => {
  try {
    const customerId = req.body.cust_id;
    const vehicleId = req.body.vehicle_id;
    const employeeId = req.body.employee_id;
    const registrationNo = req.body.registration_no;
    const registrationDate = req.body.registration_date;
    const { gst } = req.body;
    const roadTax = req.body.road_tax;
    const totalPrice = req.body.total_price;

    if (!customerId || !vehicleId || !employeeId
    || !registrationNo || !registrationDate || !gst || !roadTax || !totalPrice) {
      res.status(400).send({ error: 'All feilds required', success: false });
    }

    await qer.addSaleQuery(
      customerId,
      vehicleId,
      employeeId,
      registrationNo,
      registrationDate,
      gst,
      roadTax,
      totalPrice,
    );
    res.status(200).send({ success: 'Sale information added' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

module.exports = {
  addSale,
};
