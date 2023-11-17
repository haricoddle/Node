/* eslint-disable linebreak-style */
const qer = require('../models/employee');

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

module.exports = {
  createEmployee,
};
