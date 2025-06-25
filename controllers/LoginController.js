const LoginService = require('../services/LoginService')


class LoginController{
    static async login(req, res){
        const { user, password } = req.body;

        if (!req.body) {
        return res.status(404).json({
            message: 'ERRO: Não foram encontrados dados.' });
        }

        try {
        const token = await LoginService.autenticar(user, password);
        res.status(200).json({ auth: true, token });
        } catch (error) {
        res.status(401).json({ mensagem: error.message });
        }
    }
}

module.exports = LoginController;