const ClienteService = require('../services/ClienteService');
const NodeCache = require('node-cache');
const chalk = require('chalk');

const clienteCache = new NodeCache({ stdTTL: 30 });

class ClientesController {
  static async listarTodos(req, res) {
    const cachedData = clienteCache.get('clientes');

    if (cachedData) {
      const ttl = clienteCache.getTtl('clientes');
      const expireTime = new Date(ttl).toLocaleTimeString();

      console.log(chalk.green(`[CACHE] Clientes retornados do cache. Expira às ${expireTime}`));
      return res.json(cachedData);
    }

    try {
      const clientes = await ClienteService.getAllClientes();
      clienteCache.set('clientes', clientes);

      const ttl = clienteCache.getTtl('clientes');
      const expireTime = new Date(ttl).toLocaleTimeString();

      console.log(chalk.yellow(`[DB] Clientes retornados do banco de dados. Cache válido até ${expireTime}`));
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const novoCliente = await ClienteService.createCliente(req.body);
      clienteCache.del('clientes');
      console.log(chalk.red(`[CACHE] Cache de clientes invalidado após criação.`));
      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const clienteAtualizado = await ClienteService.updateCliente(id, req.body);
      clienteCache.del('clientes');
      console.log(chalk.red(`[CACHE] Cache de clientes invalidado após atualização.`));
      res.json(clienteAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      await ClienteService.deleteCliente(id);
      clienteCache.del('clientes');
      console.log(chalk.red(`[CACHE] Cache de clientes invalidado após exclusão.`));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ClientesController;
