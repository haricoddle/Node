function addServiceQuery(custId, vehicleId, date, issueFaced) {
    let qr = `INSERT INTO service_booking(cust_id, vehicle_id, date, issue_faced) VALUES(${custId}, ${vehicleId}, '${date}', '${issueFaced}');`
    return qr;
}

function updateServiceQuery(date,id) {
    let qr = `UPDATE service_booking
            SET date = '${date}'
            WHERE id = ${id};`
    return qr;
}

function deleteServiceQuery(id) {
    let qr = `DELETE FROM service_booking WHERE id = ${id}`;
    return qr;
}

module.exports = {
    addServiceQuery,
    updateServiceQuery,
    deleteServiceQuery,
}