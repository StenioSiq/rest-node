const connection = require('../config/database');

class ClienteService {
  static async getAllClientes() {
    const [rows] = await connection.query('SELECT * FROM clientes');
    return rows;
  }

  static async createCliente({ nome, sobrenome, email, idade }) {
    const [result] = await connection.query(
      'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
      [nome, sobrenome, email, idade]
    );
    return { id: result.insertId, nome, sobrenome, email, idade };
  }

  static async updateCliente(id, { nome, sobrenome, email, idade }) {
    await connection.query(
      'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?',
      [nome, sobrenome, email, idade, id]
    );
    return { id, nome, sobrenome, email, idade };
  }

  static async deleteCliente(id) {
    const [result] = await connection.query('DELETE FROM clientes WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = ClienteService;