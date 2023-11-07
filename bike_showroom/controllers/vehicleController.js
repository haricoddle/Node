const con = require('../config/dbConnect');
const qer = require('../models/vehicleConnection');

const showAllVehicles = (req, res) => {

    con.query(qer.displayQuery(), (err, result) => {
        if(err) {
            res.status(400).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: result})
        }
    });
}

const addNewVehicle = (req, res) => {
    let typeId = req.body.type_id;
    let modelName = req.body.model_name;
    let cc = req.body.cc;
    let price = req.body.price;
    let colorId = req.body.color_id;

    if(!typeId || !modelName || !cc || !price || !colorId) {
        res.status(400).send({error : 'All feilds are required'});
    }

    con.query(qer.addVehicleQuery(typeId, modelName, cc, price, colorId), (err, result) =>{
        if(err) {
            res.status(500).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: 'Vehicle added successfully'});
        }
    });
}
module.exports = {
    showAllVehicles,
    addNewVehicle
}