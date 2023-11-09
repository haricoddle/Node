const con = require('../config/dbConnect');
const qer = require('../models/sales')

const addSale = async (req, res) => {
    let customerId = await req.body.cust_id;
    let vehicleId = await req.body.vehicle_id;
    let employeeId = await req.body.employee_id;
    let registrationNo = await req.body.registration_no;
    let registrationDate = await req.body.registration_date;
    let gst = await req.body.gst;
    let roadTax = await req.body.road_tax;
    let totalPrice = await req.body.total_price;

    if(!customerId || !vehicleId || !employeeId || !registrationNo || !registrationDate || !gst || !roadTax || !totalPrice) {
        res.status(400).send({error: 'All feilds required'});
    }

    con.query(qer.addSaleQuery(customerId,vehicleId,employeeId,registrationNo,registrationDate,gst,roadTax,totalPrice), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occured', success:false});
        } else {
            res.status(200).send({success: 'Sale information added'});
        }
    })
}

module.exports = {
    addSale,
}