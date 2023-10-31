const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hari_prasad'
})

 app.get('/customers', (req, res) => {
    const sql = 'SELECT * FROM customers';
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
 })

app.listen(3000, (error) => {
    if(error) {
        console.log('error occured');
    } else {
        console.log('listening on server 3000');
    }
});