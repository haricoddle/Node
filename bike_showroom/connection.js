const mysql = require('mysql2');

async function connectDB(){
    
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
}

module.exports = {
    connectDB,
}