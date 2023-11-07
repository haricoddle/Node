function displayQuery() {
    let qr = `SELECT model_name, cc, price, color_id FROM vehicle;`
    return qr;
}

function addVehicleQuery(typeId, modelName, cc, price, colorId) {
    let qr = `INSERT INTO vehicle(type_id, model_name, cc, price, color_id) VALUES(${typeId},'${modelName}', ${cc}, ${price}, ${colorId});`
    return qr;
}

module.exports = {
    displayQuery,
    addVehicleQuery
}