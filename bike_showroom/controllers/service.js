const con = require('../config/dbConnect');
const qer = require('../models/service');

const addService = async(req, res) => {
    let custId = await req.body.cust_id;
    let vehicleId = await req.body.vehicle_id;
    let date = await req.body.date;
    let issueFaced = await req.body.issue_faced;

    if(!custId || !vehicleId || !date || !issueFaced) {
        res.status(400).send({error: 'All feilds are required'});
    }

    con.query(qer.addServiceQuery(custId, vehicleId, date, issueFaced), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: 'Service booking added'});
        }
    })
}

const updateService = async(req, res) => {
    let date = await req.body.date;
    let id = await req.body.id;

    if(!date) {
        res.status(400).send({error: 'feild required'});
    }
    con.query(qer.updateServiceQuery(date,id), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: 'Update added'});
        }
    })
}

const deleteService = async(req, res) => {
    let id = await req.body.id;

    if(!id) {
        res.status(500).send({error: 'Feild required'});
    }
    con.query(qer.deleteServiceQuery(id), (err, result) => {
        if(err) {
            res.status(400).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: 'Service deleted'});
        }
    })
}

module.exports = {
    addService,
    updateService,
    deleteService,

}