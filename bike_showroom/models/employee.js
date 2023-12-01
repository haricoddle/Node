/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function empSignUpQuery(deptId, name, dob, phone, mail, hireDate, salary) {
  const qr = `INSERT INTO employee(dept_id,name,dob,phone,email,hire_date,salary) VALUES(${deptId},'${name}','${dob}','${phone}','${mail}','${hireDate}',${salary});`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery;
}

async function checkUserQuery(userName, password) {
  const qr = `SELECT * FROM employee
            WHERE username = '${userName}' AND password = '${password}';`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

async function checkPermission(permission, username) {
  const qr = `SELECT e.name, per.name as permissions
  FROM employee AS e
  LEFT JOIN role AS r ON e.role_id = r.id
  LEFT JOIN employee_permissions AS p ON r.id = p.roles_id
  left join permission as per on per.id = p.permissions_id
  WHERE per.name = '${permission}' AND e.username = '${username}';`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

async function searchUserQuery(username) {
  const qr = `SELECT * FROM employee where username = '${username}';`;
  const passedQuery = await con.promise().query(qr);
  return passedQuery[0];
}

module.exports = {
  empSignUpQuery,
  checkUserQuery,
  checkPermission,
  searchUserQuery,
};
