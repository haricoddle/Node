const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

const jsonParser = bodyParser.json();

const conn = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hari_prasad'
});
conn.connect((err) => {
    if(err) throw err;

    console.log('connected to database');
    
})

app.post('/customers', jsonParser, function(req, res) {
    let name =  req.body.name;
    let dob = req.body.dob;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;
    let licence_no = req.body.licence_no;
    let username = req.body.username;
    let password = req.body.password;

    let qr =  `INSERT INTO customers(name, dob, phone, address, email, licence_no, username, password) VALUES('${name}','${dob}', '${phone}', '${address}', '${email}','${licence_no}','${username}','${password}')`;

    conn.query(qr, (err,result)=>{
        if(err) {
            res.send({error:'Error occured'});
        } else {
            res.send({success:'Successful'});
        }
    })
})

app.listen(8001, function(){
    console.log('server listening at port 8001');
})