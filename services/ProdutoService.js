const connection = require('../config/database');
const CacheService = require('./CacheService');
const chalk = require('chalk');

class ProdutoService {
  static async getAllProdutos() {
    const cache = CacheService.getProdutos();
    if (cache) return cache;

    const [rows] = await connection.query('SELECT * FROM produtos');
    CacheService.setProdutos(rows);
    console.log(chalk.yellow('[DB] Produtos retornados do banco de dados.'));
    return rows;
  }

  static async createProduto({ nome, descricao, preco }) {
    const [result] = await connection.query(
      'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, NOW())',
      [nome, descricao, preco]
    );
    CacheService.invalidateProdutos();
    return { id: result.insertId, nome, descricao, preco };
  }

  static async updateProduto(id, { nome, descricao, preco }) {
    await connection.query(
      'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = NOW() WHERE id = ?',
      [nome, descricao, preco, id]
    );
    CacheService.invalidateProdutos();
    return { id, nome, descricao, preco };
  }

  static async deleteProduto(id) {
    const [result] = await connection.query('DELETE FROM produtos WHERE id = ?', [id]);
    CacheService.invalidateProdutos();
    return result.affectedRows > 0;
  }
}

module.exports = ProdutoService;
