const jwt = require('jsonwebtoken');
const secKey = require('../controllers/customer');
const qer = require('../models/employee');

const key = secKey.secretKey;

async function verifyToken(permission, req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(500).send({ error: 'no token provided' });
  }

  const token = authHeader.split(' ')[1];
  // eslint-disable-next-line no-unused-vars, consistent-return
  jwt.verify(token, key, async (err, decoded) => {
    if (err) {
      return res.status(500).send({ error: 'Authentication failed' });
    }

    try {
      const { username } = decoded;
      const result = await qer.checkPermission(permission, username);

      if (result.length === 0) {
        return res.status(400).send({ error: 'No Permissions found', success: false });
      }

      next();
    } catch (error) {
      res.status(500).send({ error: 'Error occured in finding permission', success: false });
    }
  });
}

function verifyWritePermission(req, res, next) {
  verifyToken('write', req, res, next);
}

function verifyReadPermission(req, res, next) {
  verifyToken('read', req, res, next);
}
function verifyEditPermission(req, res, next) {
  verifyToken('edit', req, res, next);
}
function verifyDeletePermission(req, res, next) {
  verifyToken('delete', req, res, next);
}

module.exports = {
  verifyToken,
  verifyWritePermission,
  verifyReadPermission,
  verifyEditPermission,
  verifyDeletePermission,
};
