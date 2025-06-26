const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
  static async listarTodos(req, res) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const { usuario, senha } = req.body;

      // Validação básica
      if (!usuario || !senha) {
        return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
      }

      const novoUsuario = await UsuarioService.createUsuario({ usuario, senha });
      res.status(201).json(novoUsuario);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  }
}

module.exports = UsuarioController;
