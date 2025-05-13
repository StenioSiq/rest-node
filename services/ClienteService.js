const connection = require('../config/database');
const CacheService = require('./CacheService');
const chalk = require('chalk');

class ClienteService {
  static async getAllClientes() {
    // Verifica cache antes da consulta ao DB
    const cache = CacheService.getClientes();
    if (cache) return cache;

    // Busca no banco
    const [rows] = await connection.query('SELECT * FROM clientes');
    CacheService.setClientes(rows); // Atualiza cache

    console.log(chalk.yellow('[DB] Clientes retornados do banco de dados.'));
    return rows;
  }

  static async createCliente({ nome, sobrenome, email, idade }) {
    const [result] = await connection.query(
      'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
      [nome, sobrenome, email, idade]
    );
    CacheService.invalidateClientes();
    return { id: result.insertId, nome, sobrenome, email, idade };
  }

  static async updateCliente(id, { nome, sobrenome, email, idade }) {
    await connection.query(
      'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?',
      [nome, sobrenome, email, idade, id]
    );
    CacheService.invalidateClientes();
    return { id, nome, sobrenome, email, idade };
  }

  static async deleteCliente(id) {
    const [result] = await connection.query('DELETE FROM clientes WHERE id = ?', [id]);
    CacheService.invalidateClientes();
    return result.affectedRows > 0;
  }
}

module.exports = ClienteService;
