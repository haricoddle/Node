const con = require('../config/dbConnect');
const qer = require('../models/vehicle');

const showAllVehicles = async(req, res) => {
    let type =  req.body.type;
    con.query(await qer.displayQuery(type), (err, result) => {
        if(err) {
            res.status(400).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: result})
        }
    });
}

const addNewVehicle = async(req, res) => {
    let typeId =  req.body.type_id;
    let modelName =  req.body.model_name;
    let cc =  req.body.cc;
    let price =  req.body.price;
    let colorId =  req.body.color_id;

    if(!typeId || !modelName || !cc || !price || !colorId) {
        res.status(400).send({error : 'All feilds are required'});
    }

    con.query(await qer.addVehicleQuery(typeId, modelName, cc, price, colorId), (err, result) =>{
        if(err) {
            res.status(500).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: 'Vehicle added successfully'});
        }
    });
}

const updateVehicles = async (req, res) => {
    let id =  req.body.id;
    let price =  req.body.price;

    if(!id || !price) {
        res.status(400).send({error: 'All feilds are required'});
    }

    con.query(await qer.updateVehicleQuery(id,price), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: 'Vehicle updated successfully'});
        }
    })
}

module.exports = {
    showAllVehicles,
    addNewVehicle,
    updateVehicles,
}