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

module.exports = {
    showAllVehicles,
}