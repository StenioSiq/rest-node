const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuariosController');
const { validarJWT } = require('../middlewares/validarJWT');

router.post('/', UsuarioController.criar);

router.get('/', validarJWT, UsuarioController.listarTodos);

module.exports = router;
