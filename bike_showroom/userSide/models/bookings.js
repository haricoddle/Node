const con = require('../../config/dbConnect');

async function addNewBookingQuery(customerName, phoneNo, location, vehicleId) {
  const qr = `INSERT INTO bookings(customer_name, phone_no, location, vehicle_id) VALUES('${customerName}', '${phoneNo}', '${location}', ${vehicleId});`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function checkForBooking(customerName, phoneNo) {
  const qr = `SELECT * FROM bookings 
                WHERE customer_name = '${customerName}'
                AND phone_no = '${phoneNo}';`;
  const passedQuery = await con.promise().query(qr);
  console.log(passedQuery[0]);
  return passedQuery[0];
}

module.exports = {
  addNewBookingQuery,
  checkForBooking,
};
