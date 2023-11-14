const con = require('../config/dbConnect');

async function signUpQuery(name, dob, phone, address, email, licenceNo, username, password) {
    let qr = `INSERT INTO customer (name, dob, phone, address, email, licence_no, username, password) VALUES ('${name}','${dob}','${phone}','${address}','${email}','${licenceNo}','${username}','${password}');`;
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function loginQuery(username,password) {
    let qr = `SELECT * FROM customer WHERE username = '${username}' AND password = '${password}';`
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function searchQuery(custName) {
    let qr = `SELECT * FROM customer WHERE name = '${custName}';`;
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

async function deleteQuery(id) {
    let qr = `DELETE FROM customer WHERE id = ${id};`; 
    let passedQuery = await con.promise().query(qr);
    return passedQuery;
}

module.exports = {
    signUpQuery,
    loginQuery,
    searchQuery,
    deleteQuery
}