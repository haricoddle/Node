const con = require('../config/dbConnect');

async function addServiceQuery(custId, vehicleId, date, issueFaced) {
    let qr = `INSERT INTO service_booking(cust_id, vehicle_id, date, issue_faced) VALUES(${custId}, ${vehicleId}, '${date}', '${issueFaced}');`
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function updateServiceQuery(date,id) {
    let qr = `UPDATE service_booking
            SET date = '${date}'
            WHERE id = ${id};`
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function deleteServiceQuery(id) {
    let qr = `DELETE FROM service_booking WHERE id = ${id}`;
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

module.exports = {
    addServiceQuery,
    updateServiceQuery,
    deleteServiceQuery,
}