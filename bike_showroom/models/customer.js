function signUpQuery(name,dob,phone,address,email,licence_no,username,password) {
    let qr =  `INSERT INTO customer(name, dob, phone, address, email, licence_no, username, password) VALUES('${name}','${dob}', '${phone}', '${address}', '${email}','${licence_no}','${username}','${password}')`;
    return qr;
    }

function loginQuery(username,password) {
    let qr = `SELECT * FROM customer WHERE username = '${username}' AND password = '${password}';`
    return qr;
}

function searchQuery(id) {
    let qr = `SELECT * FROM customer WHERE id = ${id};`;
    return qr;
}

function deleteQuery(id) {
    let qr = `DELETE FROM customer WHERE id = ${id};`; 
    return qr;
}

module.exports = {
    signUpQuery,
    loginQuery,
    searchQuery,
    deleteQuery
}