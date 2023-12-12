/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function addSaleQuery(
  customerId,
  vehicleId,
  employeeId,
  registrationNo,
  registrationDate,
  gst,
  roadTax,
  totalPrice,
) {
  try {
    const qr = 'INSERT INTO sales(cust_id, vehicle_id, employee_id, registration_no, registration_date, gst, road_tax, total_price) VALUES(?, ?, ?, ?, ?, ?, ?, ?);';
    // eslint-disable-next-line max-len
    const passedQuery = await con.query(qr, [customerId, vehicleId, employeeId, registrationNo, registrationDate, gst, roadTax, totalPrice]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addSaleQuery,
};
