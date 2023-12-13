const jwt = require('jsonwebtoken');

const qer = require('../models/employee');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const key = process.env.SECRET_KEY;

async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(500).send({ error: 'no token provided' });
    }

    const token = authHeader.split(' ')[1];

    // eslint-disable-next-line consistent-return
    jwt.verify(token, key, async (err, decoded) => {
      if (err) {
        return res.status(500).send({ error: 'Authentication failed' });
      }
      const deval = decoded;
      res.locals.deval = deval;
      next();
    });
  } catch (error) {
    res.status(500).send({ error: 'Error occured', success: false });
  }
}

// eslint-disable-next-line consistent-return
async function verifyUserPermission(permission, req, res, next) {
  const { deval } = res.locals;
  const { username } = deval;
  try {
    const result = await qer.checkPermission(permission, username);

    if (result.length === 0) {
      return res.status(400).send({ error: 'No Permissions found', success: false });
    }
  } catch (error) {
    res.status(500).send({ error: 'Error Occured', success: false });
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
