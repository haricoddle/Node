const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.post('/', jsonParser, function(req, res) {
    let name =  req.body.name;
    let dob = req.body.dob;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;
    let licence_no = req.body.licence_no;
    let username = req.body.username;
    let password = req.body.password;

    let qr =  `INSERT INTO customer(name, dob, phone, address, email, licence_no, username, password) VALUES('${name}','${dob}', '${phone}', '${address}', '${email}','${licence_no}','${username}','${password}')`;

    conn.query(qr, (err,result)=>{
        if(err) {
            res.send({error:'Error occured'});
        } else {
            res.send({success:'Successful'});
        }
    })
});

module.exports = router;