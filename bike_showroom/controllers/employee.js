const jwt = require('jsonwebtoken');
const qer = require('../models/employee');

const secretKey = 'hari@2905';

function generateToken(user) {
  return jwt.sign(user, secretKey);
}

const createEmployee = async (req, res) => {
  const deptId = req.body.dept_id;
  const { name } = req.body;
  const { dob } = req.body;
  const { phone } = req.body;
  const mail = req.body.email;
  const hireDate = req.body.hire_date;
  const { salary } = req.body;

  if (!deptId || !name || !dob || !phone || !mail || !hireDate || !salary) {
    res.status(400).send({ error: 'All feilds are required' });
  }
  try {
    await qer.empSignUpQuery(deptId, name, dob, phone, mail, hireDate, salary);
    res.status(200).send({ success: 'Created new employee' });
  } catch (err) {
    res.status(500).send({ error: err, success: false });
  }
};

// const updateEmployee = (req, res) => {

// }

const checkUser = async (req, res) => {
  const userName = req.body.username;
  const { password } = req.body;
  if (!userName || !password) {
    res.status(400).send({ error: 'All feilds required', success: false });
  }
  try {
    const result = await qer.checkUserQuery(userName, password);
    if (result.length > 0) {
      const user = result[0];
      const token = generateToken({ id: user.id, username: user.username });
      res.status(200).send({ success: 'login successful', token });
    } else {
      res.status(400).send({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Error occured' });
  }
};

const serachUser = async (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.status(400).send({ error: 'all feild required' });
  }
  try {
    const data = await qer.searchUserQuery(username);
    res.status(200).send({ success: data[0] });
  } catch (err) {
    res.status(500).send({ error: 'error occured' });
  }
};

module.exports = {
  createEmployee,
  checkUser,
  generateToken,
  secretKey,
  serachUser,
};
