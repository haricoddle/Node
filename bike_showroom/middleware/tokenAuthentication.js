const jwt  = require('jsonwebtoken');
const secKey = require('../controllers/customer');

const key = secKey.secretKey;

function verifyToken(req,res,next) {
    let authHeader = req.headers.authorization;
    console.log(key);
    if(!authHeader) {
        res.status(500).send({error: "no token provided"});
    }
    let token = authHeader.split(" ")[1];
    jwt.verify(token,key, (err, decoded) => {
        if(err) {
            res.status(500).send({error: "Authentication failed"});
        } else {
            next();
        }
    })
}

module.exports = {
    verifyToken
}