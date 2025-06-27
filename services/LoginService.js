const jwt = require('jsonwebtoken');
const connection = require('../config/database');
const bcrypt = require('bcrypt');

class LoginService {
  static async autenticar(usuarioInput, senhaInput) {
    const [usuarios] = await connection.query('SELECT * FROM usuarios WHERE usuario = ?', [usuarioInput]);
    const usuario = usuarios[0];

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(senhaInput, usuario.senha);
    if (!senhaValida) {
      throw new Error('Senha incorreta');
    }

    const token = jwt.sign({ id: usuario.id, usuario: usuario.usuario }, process.env.JWT_SECRET, { expiresIn: 120 });

    await connection.query('UPDATE usuarios SET token = ? WHERE id = ?', [token, usuario.id]);

    return token;
  }
}

module.exports = LoginService;
