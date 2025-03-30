const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');
const validarProduto = require('../middlewares/validarProduto');

router.get('/', ProdutosController.listarTodos);
router.post('/', validarProduto, ProdutosController.criar);
router.put('/:id', validarProduto, ProdutosController.atualizar);
router.delete('/:id', ProdutosController.deletar);

module.exports = router;