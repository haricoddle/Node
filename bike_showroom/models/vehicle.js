const con = require('../config/dbConnect');

async function displayQuery(type) {
    let qr = `SELECT v.model_name, v.cc, v.price, v.color_id
            FROM vehicle AS v
            LEFT JOIN vehicle_type as t
            ON v.type_id = t.id
            WHERE t.type = '${type}';`
    let passedQuery = await con.promise().query(qr);
    return passedQuery
}

async function addVehicleQuery(typeId, modelName, cc, price, colorId) {
    let qr = `INSERT INTO vehicle(type_id, model_name, cc, price, color_id) VALUES(${typeId},'${modelName}', ${cc}, ${price}, ${colorId});`
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function updateVehicleQuery(id, price) {
    let qr = `UPDATE vehicle
        SET price = ${price}
        WHERE id = ${id};`
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function showAllVehiclesQuery(startIndex, limit){
    let qr = `SELECT * FROM vehicle
            LIMIT ${startIndex}, ${limit};`
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

module.exports = {
    displayQuery,
    addVehicleQuery,
    updateVehicleQuery,
    showAllVehiclesQuery
}