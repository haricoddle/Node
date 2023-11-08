const con = require('../config/dbConnect');
const qer = require('../models/serviceConnection');

const addService = (req, res) => {
    let custId = req.body.cust_id;
    let vehicleId = req.body.vehicle_id;
    let date = req.body.date;
    let issueFaced = req.body.issue_faced;

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

module.exports = {
    addService,
}