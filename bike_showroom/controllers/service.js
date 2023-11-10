const qer = require('../models/service');

const addService = async(req, res) => {
    let custId =  req.body.cust_id;
    let vehicleId =  req.body.vehicle_id;
    let date =  req.body.date;
    let issueFaced =  req.body.issue_faced;

    if(!custId || !vehicleId || !date || !issueFaced) {
        res.status(400).send({error: 'All feilds are required', success: false});
    }
    try{
        await qer.addServiceQuery(custId, vehicleId, date, issueFaced)
        res.status(200).send({success: 'Service booking added'});
    }
    catch(err){
        res.status(500).send({error: 'Error occured', error: false});
    }
        
}

const updateService = async(req, res) => {
    let date =  req.body.date;
    let id =  req.body.id;

    if(!date) {
        res.status(400).send({error: 'feild required', success:false});
    }
    try{
        await qer.updateServiceQuery(date,id)
        res.status(200).send({success: 'Update added'});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', success: false});
    }  
}

const deleteService = async(req, res) => {
    let id =  req.body.id;

    if(!id) {
        res.status(500).send({error: 'Feild required', success: false});
    }
    try{
        await qer.deleteServiceQuery(id);
        res.status(200).send({success: 'Service deleted'});
    }
    catch(err) {
        res.status(400).send({error: 'Error occured', success: false});
    }
}

module.exports = {
    addService,
    updateService,
    deleteService,

}