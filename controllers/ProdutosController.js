const ProdutoService = require('../services/ProdutoService');
const NodeCache = require('node-cache');
const chalk = require('chalk');

const produtoCache = new NodeCache({ stdTTL: 30 });

class ProdutosController {
  static async listarTodos(req, res) {
    const cachedData = produtoCache.get('produtos');

    if (cachedData) {
      const ttl = produtoCache.getTtl('produtos');
      const expireTime = new Date(ttl).toLocaleTimeString();

      console.log(chalk.green(`[CACHE] Produtos retornados do cache. Expira às ${expireTime}`));
      return res.json(cachedData);
    }

    try {
      const produtos = await ProdutoService.getAllProdutos();
      produtoCache.set('produtos', produtos);

      const ttl = produtoCache.getTtl('produtos');
      const expireTime = new Date(ttl).toLocaleTimeString();

      console.log(chalk.yellow(`[DB] Produtos retornados do banco de dados. Cache válido até ${expireTime}`));
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const novoProduto = await ProdutoService.createProduto(req.body);
      produtoCache.del('produtos');
      console.log(chalk.red(`[CACHE] Cache de produtos invalidado após criação.`));
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const produtoAtualizado = await ProdutoService.updateProduto(id, req.body);
      produtoCache.del('produtos');
      console.log(chalk.red(`[CACHE] Cache de produtos invalidado após atualização.`));
      res.json(produtoAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      await ProdutoService.deleteProduto(id);
      produtoCache.del('produtos');
      console.log(chalk.red(`[CACHE] Cache de produtos invalidado após exclusão.`));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProdutosController;
