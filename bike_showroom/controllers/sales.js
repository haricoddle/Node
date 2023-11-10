const qer = require('../models/sales')

const addSale = async (req, res) => {
    let customerId =  req.body.cust_id;
    let vehicleId =  req.body.vehicle_id;
    let employeeId =  req.body.employee_id;
    let registrationNo =  req.body.registration_no;
    let registrationDate =  req.body.registration_date;
    let gst =  req.body.gst;
    let roadTax =  req.body.road_tax;
    let totalPrice =  req.body.total_price;

    if(!customerId || !vehicleId || !employeeId || !registrationNo || !registrationDate || !gst || !roadTax || !totalPrice) {
        res.status(400).send({error: 'All feilds required', success: false});
    }
    try{
        await qer.addSaleQuery(customerId,vehicleId,employeeId,registrationNo,registrationDate,gst,roadTax,totalPrice);
        res.status(200).send({success: 'Sale information added'});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', success:false});
    }      
}

module.exports = {
    addSale,
}