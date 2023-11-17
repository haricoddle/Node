const qer = require('../models/serviceBook');

const addService = async (req, res) => {
    let custId = req.body.cust_id;
    let vehicleId = req.body.vehicle_id;
    let date = req.body.date;
    let startTime = req.body.start_time;
    let issueFaced = req.body.issue_faced

    if(!custId || !vehicleId || !date || !startTime || !issueFaced) {
        res.status(400).send({error: 'All feilds required', success: false})
    }
    try{
        let result = await qer.checkTimeQuery(date, startTime);
        // console.log(result)
        if(result.length > 0) {
            res.status(500).send({error: 'Time slot booked already', success: false});
        } else {
            try{
                await qer.addServiceQuery(custId, vehicleId, date, startTime, issueFaced);
                res.status(200).send({success: 'Service added'});
            }
            catch(err) {
                res.status(500).send({error: 'Error Occured', success: false});
            }
        }
    }
    catch(err) {
        res.status(500).send({error:err})
    }
}

module.exports = {
    addService,
}