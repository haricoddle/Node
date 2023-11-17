/* eslint-disable linebreak-style */
const con = require('../../config/dbConnect');

async function checkTimeQuery(date, startTime) {
  const qr = ` SELECT * FROM service_booking
        WHERE date = '${date}'
        AND '${startTime}' BETWEEN start_time AND end_time;`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

async function addServiceQuery(custId, vehicleId, date, startTime, issueFaced) {
  const qr = `INSERT INTO service_booking(cust_id, vehicle_id, date, start_time, issue_faced) VALUES(${custId}, ${vehicleId}, '${date}', '${startTime}', '${issueFaced}');`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function viewBookingQuery(date) {
  const qr = `SELECT * FROM service_booking WHERE date = '${date}';`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  checkTimeQuery,
  addServiceQuery,
  viewBookingQuery,
};