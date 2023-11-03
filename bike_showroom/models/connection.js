function signUpQuery(name,dob,phone,address,email,licence_no,username,password) {
    let qr =  `INSERT INTO customer(name, dob, phone, address, email, licence_no, username, password) VALUES('${name}','${dob}', '${phone}', '${address}', '${email}','${licence_no}','${username}','${password}')`;
    return qr;
    }
    
    module.exports = {
        signUpQuery,
    }