const qer = require('../models/accessories');

const viewAccessories = async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page -1) * limit;

    try{
        const result = await qer.showAllQuery(startIndex, limit);
        const pageNo = await qer.showPageNoQuery();
        const totalPage = Math.ceil(pageNo[0][0].count / limit);

        res.status(200).send({success: true, currentPage: page, totalPages: totalPage, data: result[0]});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', success: false});
    }
}

const updateAccessories = async (req, res) => {
    const id = req.body.id;
    const type = req.body.type;

    if(!id || !type) {
        res.status(400).send({error: 'All feilds required', success: false});
    }
    try{
        await qer.updateQuery(id, type);
        res.status(200).send({success: 'Updated successfully'});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', success: false});
    }
}

const addAccessories = async(req, res) => {
    const vehicleId = req.body.vehicle_id;
    const type = req.body.type;

    if(!vehicleId || !type) {
        res.status(400).send({error: 'All feilds are required', success: false});
    }
    try{
        await qer.addQuery(vehicleId, type);
        res.status(200).send({success: 'New Item added'});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', err, success:false})
    }
}

const deleteAccessories = async (req, res) => {
    const id = req.body.id;

    if(!id) {
        res.status(400).send({error: 'All feilds are required', success: false});
    }
    try{
        await qer.deleteQuery(id);
        res.status(200).send({success:'Item deleted'});
    }
    catch(err){
        res.status(500).send({error: 'Error occured', success: false})
    }
}

module.exports = {
    viewAccessories,
    updateAccessories,
    addAccessories,
    deleteAccessories
}