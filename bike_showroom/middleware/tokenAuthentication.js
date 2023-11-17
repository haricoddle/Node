/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');
const secKey = require('../controllers/customer');

const key = secKey.secretKey;

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(500).send({ error: 'no token provided' });
  }
  const token = authHeader.split(' ')[1];
  // eslint-disable-next-line no-unused-vars
  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      res.status(500).send({ error: 'Authentication failed' });
    } else {
      next();
    }
  });
}

module.exports = {
  verifyToken,
};
