const jwt = require('jsonwebtoken');


function validarJWT (req,res,next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).end();

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401).end();
        req.id = decoded.id;
        next();
    });
}

module.exports = validarJWT;