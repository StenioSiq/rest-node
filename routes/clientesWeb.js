const express = require('express');
const axios = require('axios');
const { validarJWT } = require('../middlewares/validarJWT');

const router = express.Router();

router.get('/', validarJWT, async (req, res) => {
  try {
    const token = req.cookies.token;

    const { data: clientes } = await axios.get('http://localhost:3000/clientes', {
      headers: { Authorization: `Bearer ${token}` }
    });

    res.render('clientes', {
      title: 'Clientes',
      usuario: req.usuario?.usuario || null,
      clientes,
      error: null
    });
  } catch (error) {
    res.status(500).render('clientes', {
      title: 'Clientes',
      usuario: req.usuario?.usuario || null,
      clientes: [],
      error: 'Erro ao carregar clientes.'
    });
  }
});

module.exports = router;