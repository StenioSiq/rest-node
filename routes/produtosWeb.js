const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const { data: produtos } = await axios.get('http://localhost:3000/produtos');

    res.render('produtos', {
      title: 'Produtos',
      usuario: req.usuario?.usuario || null,
      produtos,
      error: null
    });
  } catch (err) {
    res.status(500).render('produtos', {
      title: 'Produtos',
      usuario: req.usuario?.usuario || null,
      produtos: [],
      error: 'Erro ao carregar os produtos.'
    });
  }
});

module.exports = router;