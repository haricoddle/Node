const con = require('../config/dbConnect');
const qer = require('../models/customer');
const jwt = require('jsonwebtoken');
const secretKey = 'hari@2905';


function generateToken(user) {
    return jwt.sign(user, secretKey);
}

const createUser = async(req, res) => {
    let name =  await req.body.name;
    let dob = await req.body.dob;
    let phone = await req.body.phone;
    let address = await req.body.address;
    let email = await req.body.email;
    let licenceNo = await req.body.licence_no;
    let username = await req.body.username;
    let password = await req.body.password;

    if (!name || !dob || !phone || !address || !email || !licenceNo || !username || !password) {
        return res.status(400).send({ error: 'All fields are required', success: false});
    }

    con.query(qer.signUpQuery(name,dob,phone,address,email,licenceNo,username,password), (err,result)=>{
        if(err) {
            res.status(500).send({error:'Error occured', success: false});
        } else {
            res.status(201).send({success:'New user added'});
        }
    });
}

const checkUser = async (req, res) => {
    let username = await req.body.username;
    let password = await req.body.password;

    if(!username || !password) {
        res.status(400).send({error: 'All feilds are required', success: false});
    }

    con.query(qer.loginQuery(username,password), (err,result) => {
        if(err) {
            res.status(500).send({error: 'Error occured', success: false});
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

const findUser = async (req, res) => {
    let id = await req.body.id;

    if(!id) {
        res.status(400).send({error: 'Feild required', success: false});
    }

    con.query(qer.searchQuery(id), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occuerd', success: false});
        }
        if(result.length > 0) {
            res.status(200).send({success : result});
        } else {
            res.status(400).send({error: 'User not found', success: false});
        }
    })
}

const deleteUser = async (req, res) => {
    let id = await req.body.id;

    if(!id) {
        res.status(400).send({error : 'Feilds required', success: false})
    }
    con.query(qer.deleteQuery(id), (err, result) => {
        if(err) {
            res.status(500).send({error: 'Error occured', success: false});
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