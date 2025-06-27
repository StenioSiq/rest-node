const { blacklist } = require('../middlewares/validarJWT');

const logout = async (req, res) => {
  const token = req.token;
  const isBrowser = req.headers.accept?.includes('text/html');

  if (!token) {
    if (isBrowser) {
      return res.redirect('/index');
    }
    return res.status(400).json({ mensagem: 'Token não encontrado.' });
  }

  blacklist.add(token);
  res.clearCookie('token');

  if (isBrowser) {
    return res.redirect('/index'); 
  }
  return res.status(200).json({ mensagem: 'Logout realizado com sucesso. Token invalidado.' });
};

module.exports = { logout };
