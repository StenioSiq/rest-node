module.exports = {
  logout: async (req, res) => {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ mensagem: 'ID do usuário não fornecido.' });
    }

    return res.status(200).json({ mensagem: 'Logout simulado com sucesso.' });
  }
};
