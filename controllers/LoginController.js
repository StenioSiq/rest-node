const LoginService = require('../services/LoginService');

class LoginController {
  static async login(req, res) {

    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
      return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
    }

    try {
      const token = await LoginService.autenticar(usuario, senha);
      res.status(200).json({ auth: true, token });
    } catch (error) {
      res.status(401).json({ mensagem: error.message });
    }
  }
}

module.exports = LoginController;
