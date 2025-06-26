const express = require('express');
const router = express.Router();
const ClientesController = require('../controllers/ClientesController');
const validarCliente = require('../middlewares/validarCliente');
const { validarJWT } = require('../middlewares/validarJWT');

router.get('/', validarJWT, ClientesController.listarTodos);
router.post('/', validarJWT, validarCliente, ClientesController.criar);
router.put('/:id', validarJWT, validarCliente, ClientesController.atualizar);
router.delete('/:id', validarJWT, ClientesController.deletar);

module.exports = router;