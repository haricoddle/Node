const jwt = require('jsonwebtoken');
const qer = require('../models/customer');

const secretKey = 'hari@2905';

function generateToken(user) {
  return jwt.sign(user, secretKey);
}

// eslint-disable-next-line consistent-return
const createUser = async (req, res) => {
  const { name } = req.body;
  const { dob } = req.body;
  const { phone } = req.body;
  const { address } = req.body;
  const { email } = req.body;
  const licenceNo = req.body.licence_no;
  const { username } = req.body;
  const { password } = req.body;

  if (!name || !dob || !phone || !address || !email || !licenceNo || !username || !password) {
    return res.status(400).send({ error: 'All fields are required', success: false });
  }

  try {
    await qer.signUpQuery(name, dob, phone, address, email, licenceNo, username, password);
    res.status(201).send({ success: 'New user added' });
  } catch (err) {
    res.status(500).send({ error: 'Error occurred', success: false });
  }
};

const checkUser = async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  if (!username || !password) {
    res.status(400).send({ error: 'All feilds are required', success: false });
  }
  try {
    const result = await qer.loginQuery(username, password);
    if (result.length > 0) {
      const user = result[0];
      const token = generateToken({ id: user.id, username: user.username });
      res.status(200).send({ success: 'Login successful', token });
    } else {
      res.status(400).send({ error: 'User not found', success: false });
    }
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const findUser = async (req, res) => {
  const custName = req.body.name;

  if (!custName) {
    res.status(400).send({ error: 'Feild required', success: false });
  }
  try {
    const result = await qer.searchQuery(custName);
    if (result.length > 0) {
      res.status(200).send({ success: result[0] });
    } else {
      res.status(400).send({ error: 'User not found', success: false });
    }
  } catch (err) {
    res.status(500).send({ error: 'Error occuerd', success: false });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).send({ error: 'Feilds required', success: false });
  }
  try {
    await qer.deleteQuery(id);
    res.status(200).send({ success: 'User deleted' });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const showAllUser = async (req, res) => {
  const { page } = req.query;
  const { limit } = req.query;
  const startIndex = (page - 1) * limit;

  try {
    const result = await qer.showAllQuery(startIndex, limit);
    const pageNo = await qer.showPageNoQuery();
    const totalPage = Math.ceil(pageNo[0][0].count / limit);

    res.status(200).send({
      success: true, currentPage: page, totalPages: totalPage, data: result[0],
    });
  } catch (err) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
};

const updateUser = async (req, res) => {
  const phoneNumber = req.body.phone;
  const { id } = req.body;

  if (!phoneNumber || !id) {
    res.status(400).send({ error: 'All feilds are required', success: false });
  }

  try {
    await qer.updateUserQuery(phoneNumber, id);
    res.status(200).send({ success: 'Customer details updates' });
  } catch (err) {
    res.status(500).send({ error: 'some error occured', success: false });
  }
};

module.exports = {
  secretKey,
  createUser,
  checkUser,
  generateToken,
  findUser,
  deleteUser,
  showAllUser,
  updateUser,
};
