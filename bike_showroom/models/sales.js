const con = require('../config/dbConnect');


function addSaleQuery(customerId,vehicleId,employeeId,registrationNo,registrationDate,gst,roadTax,totalPrice) {
    let qr = `INSERT INTO sales(cust_id, vehicle_id, employee_id, registration_no, registration_date, gst, road_tax, total_price) VALUES(${customerId}, ${vehicleId}, ${employeeId}, '${registrationNo}', '${registrationDate}', ${gst}, ${roadTax}, ${totalPrice});`
    let passedQuery = con.promise().query(qr);
    return passedQuery;
}

module.exports ={
    addSaleQuery,
}