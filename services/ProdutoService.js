const connection = require('../config/database');

class ProdutoService {
  static async getAllProdutos() {
    const [rows] = await connection.query('SELECT * FROM produtos');
    return rows;
  }

  static async createProduto({ nome, descricao, preco }) {
    const [result] = await connection.query(
      'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, NOW())',
      [nome, descricao, preco]
    );
    return { id: result.insertId, nome, descricao, preco };
  }

  static async updateProduto(id, { nome, descricao, preco }) {
    await connection.query(
      'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = NOW() WHERE id = ?',
      [nome, descricao, preco, id]
    );
    return { id, nome, descricao, preco };
  }

  static async deleteProduto(id) {
    const [result] = await connection.query('DELETE FROM produtos WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = ProdutoService;