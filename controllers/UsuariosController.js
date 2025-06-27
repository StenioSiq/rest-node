const UsuarioService = require('../services/UsuarioService');
const connection = require('../config/database');

class UsuarioController {
  static async listarTodos(req, res) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletar(req, res) {
  const { id } = req.params;

    try {
      const [resultado] = await connection.query('DELETE FROM usuarios WHERE id = ?', [id]);

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
      }

      return res.status(200).json({ mensagem: 'Usuário deletado com sucesso.' });
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      return res.status(500).json({ mensagem: 'Erro ao deletar usuário.' });
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
