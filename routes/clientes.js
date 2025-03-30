const express = require('express');
const router = express.Router();
const ClientesController = require('../controllers/ClientesController');
const validarCliente = require('../middlewares/validarCliente');

router.get('/', ClientesController.listarTodos);
router.post('/', validarCliente, ClientesController.criar);
router.put('/:id', validarCliente, ClientesController.atualizar);
router.delete('/:id', ClientesController.deletar);

module.exports = router;