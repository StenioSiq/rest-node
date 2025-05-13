const NodeCache = require('node-cache');
const chalk = require('chalk');

const cache = new NodeCache({ stdTTL: 30 }); // TTL = 30 segundos

const KEYS = {
  CLIENTES: 'clientes',
  PRODUTOS: 'produtos',
};

module.exports = {
  // CLIENTES
  getClientes() {
    const data = cache.get(KEYS.CLIENTES);
    if (data) console.log(chalk.green('[CACHE] Clientes retornados do cache.'));
    return data;
  },
  setClientes(data) {
    cache.set(KEYS.CLIENTES, data);
    console.log(chalk.blue('[CACHE] Cache de clientes atualizado.'));
  },
  invalidateClientes() {
    cache.del(KEYS.CLIENTES);
    console.log(chalk.red('[CACHE] Cache de clientes invalidado.'));
  },

  // PRODUTOS
  getProdutos() {
    const data = cache.get(KEYS.PRODUTOS);
    if (data) console.log(chalk.green('[CACHE] Produtos retornados do cache.'));
    return data;
  },
  setProdutos(data) {
    cache.set(KEYS.PRODUTOS, data);
    console.log(chalk.blue('[CACHE] Cache de produtos atualizado.'));
  },
  invalidateProdutos() {
    cache.del(KEYS.PRODUTOS);
    console.log(chalk.red('[CACHE] Cache de produtos invalidado.'));
  }
};
