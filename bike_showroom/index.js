const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');


const userRouter = require('./routes/user')

app.use(cors());

const conn = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hari'
});
conn.connect((err) => {
    if(err) throw err;

    console.log('connected to database');
    
})


 
app.use('/customer', userRouter);

app.listen(8001, function(){
    console.log('server listening at port 8001');
})