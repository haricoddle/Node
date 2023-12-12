/* eslint-disable consistent-return */
const con = require('../config/dbConnect');

async function empSignUpQuery(deptId, name, dob, phone, mail, hireDate, salary) {
  const qr = 'INSERT INTO employee(dept_id,name,dob,phone,email,hire_date,salary) VALUES(?, ?, ?, ?, ?, ?, ?);';
  const passedQuery = await con.query(qr, [deptId, name, dob, phone, mail, hireDate, salary]);
  return passedQuery;
}

async function checkUserQuery(userName, password) {
  const qr = 'SELECT * FROM employee WHERE username = ? AND password = ?;';
  const passedQuery = await con.query(qr, [userName, password]);
  return passedQuery;
}

async function checkPermission(permission, username) {
  try {
    const qr = `SELECT e.name, per.name as permissions
  FROM employee AS e
  LEFT JOIN role AS r ON e.role_id = r.id
  LEFT JOIN employee_permissions AS p ON r.id = p.roles_id
  left join permission as per on per.id = p.permissions_id
  WHERE per.name = ? AND e.username = ?;`;
    const passedQuery = await con.query(qr, [permission, username]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function searchUserQuery(username) {
  try {
    const qr = `SELECT * FROM employee 
        WHERE username = ?;`;
    const passedQuery = await con.query(qr, [username]);
    return passedQuery[0];
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  empSignUpQuery,
  checkUserQuery,
  checkPermission,
  searchUserQuery,
};
