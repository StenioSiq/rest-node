const { blacklist } = require('../middlewares/validarJWT');

const logout = async (req, res) => {
  const token = req.token;

  if (!token) {
    return res.status(400).json({ mensagem: 'Token não encontrado.' });
  }

  blacklist.add(token); // adiciona o token à blacklist

  return res.status(200).json({ mensagem: 'Logout realizado com sucesso. Token invalidado.' });
};

module.exports = { logout };
