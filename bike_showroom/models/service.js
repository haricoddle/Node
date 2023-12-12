/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function addServiceQuery(custId, vehicleId, date, issueFaced, startTime, bookingStatus) {
  try {
    const qr = 'INSERT INTO service_booking(cust_id, vehicle_id, date, issue_faced, start_time, booking_status) VALUES(?, ?, ?, ?, ?, ?);';
    // eslint-disable-next-line max-len
    const passedQuery = await con.query(qr, [custId, vehicleId, date, issueFaced, startTime, bookingStatus]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function updateServiceQuery(date, id) {
  try {
    const qr = `UPDATE service_booking
            SET date = ?
            WHERE id = ?;`;
    const passedQuery = await con.query(qr, [date, id]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function deleteServiceQuery(id, bookingStatus) {
  try {
    const qr = `UPDATE service_booking
          SET booking_status = ?
          WHERE id = ?`;
    const passedQuery = await con.query(qr, [id, bookingStatus]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addServiceQuery,
  updateServiceQuery,
  deleteServiceQuery,
};
