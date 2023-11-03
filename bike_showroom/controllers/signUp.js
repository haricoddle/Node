const con = require('../dbConnect');
const qer = require('../models/connection')

const createUser = (req, res) => {
    let name =  req.body.name;
    let dob = req.body.dob;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;
    let licence_no = req.body.licence_no;
    let username = req.body.username;
    let password = req.body.password;


    con.query(qer.signUpQuery(name,dob,phone,address,email,licence_no,username,password), (err,result)=>{
        if(err) {
            res.send({error:'Error occured'});
        } else {
            res.send({success:'Successful'});
        }
    });
}

module.exports = {
    createUser,
}