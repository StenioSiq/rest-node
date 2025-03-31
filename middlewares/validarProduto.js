function validarProduto(req, res, next) {
  const { nome, descricao, preco } = req.body;
  if (!nome || !descricao || !preco) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
  }
  if (typeof preco !== 'number') {
    return res.status(400).json({ error: 'Preço deve ser um número.' });
  }
  next();
}

module.exports = validarProduto;