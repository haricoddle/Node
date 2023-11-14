const qer = require('../models/vehicle');

const showAllVehicles = async(req, res) => {
    let type =  req.body.type;

    if(!type) {
        res.status(400).send({error: 'Feild required', success:false})
    }
    try{
        const result = await qer.displayQuery(type)
        res.status(200).send({success: result[0]})
    }
    catch(err) {
        res.status(400).send({error: 'Error occured', success: false});
    }    
}

const addNewVehicle = async(req, res) => {
    let typeId =  req.body.type_id;
    let modelName =  req.body.model_name;
    let cc =  req.body.cc;
    let price =  req.body.price;
    let colorId =  req.body.color_id;

    if(!typeId || !modelName || !cc || !price || !colorId) {
        res.status(400).send({error : 'All feilds are required', success: false});
    }
    try{
        await qer.addVehicleQuery(typeId, modelName, cc, price, colorId)
        res.status(200).send({success: 'Vehicle added successfully'});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', success: false});
    }
}

const updateVehicles = async (req, res) => {
    let id =  req.body.id;
    let price =  req.body.price;

    if(!id || !price) {
        res.status(400).send({error: 'All feilds are required', success: false});
    }
    try{
        await qer.updateVehicleQuery(id,price)
        res.status(200).send({success: 'Vehicle updated successfully'});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', success: false});
    }
}

module.exports = {
    showAllVehicles,
    addNewVehicle,
    updateVehicles,
}