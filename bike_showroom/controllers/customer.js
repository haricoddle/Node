const con = require('../config/dbConnect');
const qer = require('../models/customer');
const jwt = require('jsonwebtoken');
const secretKey = 'hari@2905';


function generateToken(user) {
    return jwt.sign(user, secretKey);
}

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
            res.status(201).send({success:'New user added'});
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
            const user = result[0];
            const token = generateToken({id: user.id, username: user.username})
            res.status(200).send({success: 'Login successful', token: token});
        } else {
             res.status(400).send({error: 'User not found'});
        }
    })
}

const findUser = (req, res) => {
    let id = req.body.id;

    if(!id) {
        res.status(400).send({error: "Feild required"});
    }

    con.query(qer.searchQuery(id), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occuerd'});
        }
        if(result.length > 0) {
            res.status(200).send({success : result});
        } else {
            res.status(400).send({error: 'User not found'});
        }
    })
}

const deleteUser = (req, res) => {
    let id = req.body.id;

    if(!id) {
        res.status(400).send({error : 'Feilds required'})
    }
    con.query(qer.deleteQuery(id), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occured'});
        } else {
            res.status(200).send({success: 'User deleted'});
        }
    })
}
module.exports = {
    createUser,
    checkUser,
    generateToken,
    findUser,
    deleteUser
}