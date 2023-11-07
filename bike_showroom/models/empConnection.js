function empSignUpQuery(deptId,name,dob,phone,mail,hireDate,salary) {
    let qr = `INSERT INTO employee(dept_id,name,dob,phone,email,hire_date,salary) VALUES(${deptId},'${name}','${dob}','${phone}','${mail}','${hireDate}',${salary});`
    return qr;
}

module.exports = {
    empSignUpQuery,
}