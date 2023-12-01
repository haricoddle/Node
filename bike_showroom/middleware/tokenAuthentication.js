const jwt = require('jsonwebtoken');

const secKey = require('../controllers/customer');
const qer = require('../models/employee');

const key = secKey.secretKey;
let deval = null;

async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(500).send({ error: 'no token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
  // eslint-disable-next-line no-unused-vars, consistent-return
    jwt.verify(token, key, async (err, decoded) => {
      if (err) {
        return res.status(500).send({ error: 'Authentication failed' });
      }

      deval = decoded;

      next();
    });
  } catch (error) {
    res.status(500).send({ error: 'Error occured in finding permission', success: false });
  }
}

// eslint-disable-next-line consistent-return
async function verifyUserPermission(permission, req, res, next) {
  const { username } = deval;
  try {
    const result = await qer.checkPermission(permission, username);

    if (result.length === 0) {
      return res.status(400).send({ error: 'No Permissions found', success: false });
    }
  } catch (error) {
    res.status(500).send({ error: 'Error Occured' });
  }
  next();
}

function verifyPermission(permission) {
  return (req, res, next) => {
    verifyUserPermission(permission, req, res, next);
  };
}

module.exports = {
  verifyToken,
  verifyPermission,
};
