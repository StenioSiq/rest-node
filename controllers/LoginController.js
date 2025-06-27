const LoginService = require('../services/LoginService');

class LoginController {
  static async login(req, res) {

    const { usuario, senha } = req.body;
    const isBrowser = req.headers.accept?.includes('text/html');

    if (!usuario || !senha) {
            if (isBrowser) {
        return res.status(400).render('login', { title: 'Login', error: 'Usuário e senha são obrigatórios.' });
      }
      return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
    }

    try {
      const token = await LoginService.autenticar(usuario, senha);
        if (isBrowser) {
          res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
          return res.redirect('/index');
      }
      return res.status(200).json({ auth: true, token });
    } catch (error) {
        if (isBrowser) {
          return res.status(401).render('login', { title: 'Login', error: error.message });
      }
      res.status(401).json({ mensagem: error.message });
    }
  }
}

module.exports = LoginController;
