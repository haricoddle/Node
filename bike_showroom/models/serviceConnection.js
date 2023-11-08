function addServiceQuery(custId, vehicleId, date, issueFaced) {
    let qr = `INSERT INTO service_booking(cust_id, vehicle_id, date, issue_faced) VALUES(${custId}, ${vehicleId}, '${date}', '${issueFaced}');`
    return qr;
}

module.exports = {
    addServiceQuery,
}