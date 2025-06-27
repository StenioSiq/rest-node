const jwt = require('jsonwebtoken');
const { blacklist } = require('./validarJWT'); 

function injetarUsuario(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return next();
  }

  if (blacklist.has(token)) {
    res.clearCookie('token');  
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.clearCookie('token');  
      return next();
    }

    req.usuario = decoded;
    next();
  });
}

module.exports = injetarUsuario;