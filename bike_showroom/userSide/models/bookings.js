const con = require('../../config/dbConnect');

async function addNewBookingQuery(customerName, phoneNo, location, vehicleId) {
  try {
    const qr = 'INSERT INTO bookings(customer_name, phone_no, location, vehicle_id) VALUES(?, ?, ?, ?);';
    const passedQuery = await con.query(qr, [customerName, phoneNo, location, vehicleId]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function checkForBooking(customerName, phoneNo) {
  try {
    const qr = `SELECT * FROM bookings 
                WHERE customer_name = '${customerName}'
                AND phone_no = '${phoneNo}';`;
    const passedQuery = await con.query(qr);
    console.log(passedQuery[0]);
    return passedQuery[0];
  } catch (error) {
    return console.log(error);
  }
}

module.exports = {
  addNewBookingQuery,
  checkForBooking,
};
