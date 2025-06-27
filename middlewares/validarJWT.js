const jwt = require('jsonwebtoken');

const blacklist = new Set();

function validarJWT(req, res, next) {
  let token;

  const authHeader = req.headers['authorization'];

  if (authHeader) {
    const [tipo, valor] = authHeader.split(' ');
    if (tipo === 'Bearer' && valor) {
      token = valor;
    }
  }

  if (!token && req.cookies?.token) {
    token = req.cookies.token;
  }

  const isBrowser = req.headers.accept?.includes('text/html');

  if (!token) {
    if (isBrowser) {
      return res.redirect('/login');
    }
    return res.status(401).json({ mensagem: 'Token não fornecido.' });
  }

  if (blacklist.has(token)) {
    if (isBrowser) {
      return res.redirect('/login');
    }
    return res.status(401).json({ mensagem: 'Token expirado ou inválido.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (isBrowser) {
        return res.redirect('/login');
      }
      return res.status(401).json({ mensagem: 'Token inválido.' });
    }  
    req.usuarioId = decoded.id;
    req.usuario = decoded;
    req.token = token;
    next();
  });
}

module.exports = { validarJWT, blacklist };
