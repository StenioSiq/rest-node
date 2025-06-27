const express = require('express');
const axios = require('axios');
const { validarJWT } = require('../middlewares/validarJWT');

const router = express.Router();

router.get('/', validarJWT, async (req, res) => {
  try {
    const token = req.cookies.token;

    const { data: usuarios } = await axios.get('http://localhost:3000/usuarios', {
      headers: { Authorization: `Bearer ${token}` }
    });

    res.render('usuarios', {
      title: 'Usuários',
      usuario: req.usuario?.usuario || null,
      usuarios,
      error: null
    });
  } catch (error) {
    res.status(500).render('usuarios', {
      title: 'Usuários',
      usuario: req.usuario?.usuario || null,
      usuarios: [],
      error: 'Erro ao carregar usuários.'
    });
  }
});

module.exports = router;