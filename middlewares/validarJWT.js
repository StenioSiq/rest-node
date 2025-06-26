const jwt = require('jsonwebtoken');

// Blacklist simples em memória
const blacklist = new Set();

function validarJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ mensagem: 'Token não fornecido.' });
  }

  const [tipo, token] = authHeader.split(' ');

  if (tipo !== 'Bearer' || !token) {
    return res.status(401).json({ mensagem: 'Formato de token inválido.' });
  }

  if (blacklist.has(token)) {
    return res.status(401).json({ mensagem: 'Token expirado ou inválido.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ mensagem: 'Token inválido.' });

    req.usuarioId = decoded.id;
    req.token = token;
    next();
  });
}

module.exports = { validarJWT, blacklist };
