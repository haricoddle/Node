/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function empSignUpQuery(deptId, name, dob, phone, mail, hireDate, salary) {
  const qr = `INSERT INTO employee(dept_id,name,dob,phone,email,hire_date,salary) VALUES(${deptId},'${name}','${dob}','${phone}','${mail}','${hireDate}',${salary});`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  empSignUpQuery,
};
