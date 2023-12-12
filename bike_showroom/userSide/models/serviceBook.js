/* eslint-disable linebreak-style */
const con = require('../../config/dbConnect');

async function checkTimeQuery(date, startTime) {
  try {
    const qr = ` SELECT * FROM service_booking
        WHERE date = ?
        AND ? BETWEEN start_time AND end_time;`;
    const passedQuery = await con.query(qr, [date, startTime]);
    return passedQuery[0];
  } catch (error) {
    return console.log(error);
  }
}

async function addServiceQuery(custId, vehicleId, date, startTime, issueFaced, bookingStatus) {
  try {
    const qr = 'INSERT INTO service_booking(cust_id, vehicle_id, date, start_time, issue_faced, booking_status) VALUES(?, ?, ?, ?, ?, ?);';
    // eslint-disable-next-line max-len
    const passedQuery = await con.query(qr, [custId, vehicleId, date, startTime, issueFaced, bookingStatus]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function viewBookingQuery(date) {
  try {
    const qr = 'SELECT * FROM service_booking WHERE date = ?;';
    const passedQuery = await con.query(qr, [date]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

async function cancelServiceQuery(date, bookingStatus) {
  try {
    const qr = `UPDATE service_booking
              SET booking_status = ?
              WHERE date = ?;`;
    const passedQuery = await con.query(qr, [bookingStatus, date]);
    return passedQuery;
  } catch (error) {
    return console.log(error);
  }
}

module.exports = {
  checkTimeQuery,
  addServiceQuery,
  viewBookingQuery,
  cancelServiceQuery,
};
