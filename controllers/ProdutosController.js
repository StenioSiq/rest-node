const ProdutoService = require('../services/ProdutoService');

class ProdutosController {
  static async listarTodos(req, res) {
    try {
      const produtos = await ProdutoService.getAllProdutos();
      res.json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const novoProduto = await ProdutoService.createProduto(req.body);
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const produtoAtualizado = await ProdutoService.updateProduto(id, req.body);
      res.json(produtoAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      await ProdutoService.deleteProduto(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProdutosController;