const con = require('../config/dbConnect');
const qer = require('../models/connection')

const createUser = (req, res) => {
    let name =  req.body.name;
    let dob = req.body.dob;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;
    let licenceNo = req.body.licence_no;
    let username = req.body.username;
    let password = req.body.password;

    if (!name || !dob || !phone || !address || !email || !licenceNo || !username || !password) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    con.query(qer.signUpQuery(name,dob,phone,address,email,licenceNo,username,password), (err,result)=>{
        if(err) {
            res.status(500).send({error:'Error occured'});
        } else {
            res.status(201).send({success:'Successful'});
        }
    });
}

const checkUser = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(!username || !password) {
        res.status(400).send({error: 'All feilds are required'});
    }

    con.query(qer.loginQuery(username,password), (err,result) => {
        if(err) {
            res.status(500).send({error: 'Error occured'});
        }
        if(result.length > 0) {
            res.status(200).send({success: 'User found'});
        } else {
             res.status(400).send({error: 'User not found'});
        }
    })
}

module.exports = {
    createUser,
    checkUser
}