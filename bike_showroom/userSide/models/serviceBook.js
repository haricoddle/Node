const con  = require('../../config/dbConnect');

async function checkTimeQuery(date, startTime) {
    let qr = ` SELECT * FROM service_booking
        WHERE date = '${date}'
        AND '${startTime}' BETWEEN start_time AND end_time;`;
    let passedQuery = await con.promise().query(qr);
    return passedQuery[0];
}

async function addServiceQuery(custId, vehicleId, date, startTime, issueFaced) {
    let qr =  `INSERT INTO service_booking(cust_id, vehicle_id, date, start_time, issue_faced) VALUES(${custId}, ${vehicleId}, '${date}', '${startTime}', '${issueFaced}');`;
    let passedQuery = await con.promise().query(qr);
    
    return passedQuery;
}

module.exports = {
    checkTimeQuery,
    addServiceQuery,
}