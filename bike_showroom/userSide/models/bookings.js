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
                WHERE customer_name = ?
                AND phone_no = ?;`;
    const passedQuery = await con.query(qr, [customerName, phoneNo]);
    console.log(passedQuery[0]);
    return passedQuery[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addNewBookingQuery,
  checkForBooking,
};
