const LogoutService = require('../services/LogoutService');

class LogoutController{
    static async logout(req,res){
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                mensagem: 'ID do usuário não fornecido.' });
        }
        try {
            const usuarioExiste = await LogoutService.logout(id);

            if (!usuarioExiste) {
                return res.status(404).json({
                    mensagem: 'Usuário não encontrado.'});
            }

        
        return res.status(200).json({
            mensagem: 'Logout realizado com sucesso.'});
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao realizar logout.' });
        };

    };

};

module.exports = LogoutController;

