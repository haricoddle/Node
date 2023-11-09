function displayQuery(type) {
    let qr = `SELECT v.model_name, v.cc, v.price, v.color_id
            FROM vehicle AS v
            LEFT JOIN vehicle_type as t
            ON v.type_id = t.id
            WHERE t.type = '${type}';`
    return qr;
}

function addVehicleQuery(typeId, modelName, cc, price, colorId) {
    let qr = `INSERT INTO vehicle(type_id, model_name, cc, price, color_id) VALUES(${typeId},'${modelName}', ${cc}, ${price}, ${colorId});`
    return qr;
}

function updateVehicleQuery(id, price) {
    let qr = `UPDATE vehicle
        SET price = ${price}
        WHERE id = ${id};`
    return qr;
}

module.exports = {
    displayQuery,
    addVehicleQuery,
    updateVehicleQuery,
}