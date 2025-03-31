function validarCliente(req, res, next) {
    const { nome, sobrenome, email, idade } = req.body;
    if (!nome || !sobrenome || !email || !idade) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
    if (typeof idade !== 'number') {
      return res.status(400).json({ error: 'Idade deve ser um número.' });
    }
    next();
  }
  
  module.exports = validarCliente;