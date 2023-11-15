const con = require('../config/dbConnect');

async function showAllQuery(startIndex, limit) {
    let qr = `SELECT * FROM accessories
            LIMIT ${startIndex}, ${limit};`
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function showPageNoQuery() {
    let qr = `SELECT COUNT(*) AS count FROM customer;`; 
    let passedQuery = await con.promise().query(qr);
   return passedQuery;
}

async function updateQuery(id, type) {
    let qr =  `UPDATE accessories
            SET type = '${type}'
            WHERE id = ${id};`;
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function addQuery(vehicleId, type) {
    let qr = `INSERT INTO accessories(vehicle_id, type) VALUES(${vehicleId}, '${type}');`;
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function deleteQuery(id){
    let qr = `DELETE FROM accessories WHERE id = ${id};`;
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

module.exports = {
    showAllQuery,
    showPageNoQuery,
    updateQuery,
    addQuery,
    deleteQuery
}