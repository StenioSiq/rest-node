const express = require('express');
const router = express.Router();
const LogoutController = require('../controllers/LogoutController');
const { validarJWT } = require('../middlewares/validarJWT');

router.post('/', validarJWT, LogoutController.logout);

module.exports = router;
