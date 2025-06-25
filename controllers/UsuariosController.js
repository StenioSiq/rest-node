const UsuarioService = require('../services/UsuarioService');

class UsuarioController {

    static async listarTodos(req,res){
        try {
            const usuarios = await UsuarioService.getAllUsuarios();
            res.json(usuarios)
        } catch (error) {
            res.status(500).json({ error : error.message });
        }
    }
    static async criar (req, res){
        try {
            const novoUsuario = await UsuarioService.createUsuario(req.body);
            res.status(201).json(novoUsuario);
        } catch (error){
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UsuarioController;
