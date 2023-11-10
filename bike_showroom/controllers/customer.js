const qer = require('../models/customer');
const jwt = require('jsonwebtoken');
const secretKey = 'hari@2905';


function generateToken(user) {
    return jwt.sign(user, secretKey);
}

const createUser = async(req, res) => {
    let name =   req.body.name;
    let dob =  req.body.dob;
    let phone =  req.body.phone;
    let address =  req.body.address;
    let email =  req.body.email;
    let licenceNo =  req.body.licence_no;
    let username =  req.body.username;
    let password =  req.body.password;

    if (!name || !dob || !phone || !address || !email || !licenceNo || !username || !password) {
        return res.status(400).send({ error: 'All fields are required', success: false});
    }

    try {
        await qer.signUpQuery(name, dob, phone, address, email, licenceNo, username, password);
        res.status(201).send({ success: 'New user added'});
    } catch (err) {
        res.status(500).send({ error: 'Error occurred', success: false});
    }
}

const checkUser = async (req, res) => {
    let username =  req.body.username;
    let password =  req.body.password;

    if(!username || !password) {
        res.status(400).send({error: 'All feilds are required', success: false});
    }
    try{
        let result = await qer.loginQuery(username,password)
        if(result.length > 0) {
            const user = result[0];
            const token = generateToken({id: user.id, username: user.username})
            res.status(200).send({success: 'Login successful', token: token});
        } else {
             res.status(400).send({error: 'User not found', success: false});
        }
    } 
    catch(err) {
        res.status(500).send({error: 'Error occured', success: false});

    }    
}

const findUser = async (req, res) => {
    let id = req.body.id;

    if(!id) {
        res.status(400).send({error: 'Feild required', success: false});
    }
    try{
       let result = await qer.searchQuery(id)
       if(result.length > 0) {
        res.status(200).send({success : result[0]});
        } else {
        res.status(400).send({error: 'User not found', success: false});
    }
    }
    catch(err){
        res.status(500).send({error: 'Error occuerd', success: false});

    }
}

const deleteUser = async (req, res) => {
    let id = req.body.id;

    if(!id) {
        res.status(400).send({error : 'Feilds required', success: false})
    }
    try{
        await qer.deleteQuery(id);
        res.status(200).send({success: 'User deleted'});
    }
    catch(err) {
        res.status(500).send({error: 'Error occured', success: false});
    }
}

module.exports = {
    createUser,
    checkUser,
    generateToken,
    findUser,
    deleteUser
}