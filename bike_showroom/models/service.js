/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function addServiceQuery(custId, vehicleId, date, issueFaced, startTime, bookingStatus) {
  const qr = `INSERT INTO service_booking(cust_id, vehicle_id, date, issue_faced, start_time, booking_status) VALUES(${custId}, ${vehicleId}, '${date}', '${issueFaced}', '${startTime}', '${bookingStatus}');`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function updateServiceQuery(date, id) {
  const qr = `UPDATE service_booking
            SET date = '${date}'
            WHERE id = ${id};`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function deleteServiceQuery(id, bookingStatus) {
  const qr = `UPDATE service_booking
          SET booking_status = '${bookingStatus}'
          WHERE id = ${id}`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  addServiceQuery,
  updateServiceQuery,
  deleteServiceQuery,
};
