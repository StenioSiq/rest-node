const ClienteService = require('../services/ClienteService');

class ClientesController {
  static async listarTodos(req, res) {
    try {
      const clientes = await ClienteService.getAllClientes();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async criar(req, res) {
    try {
      const novoCliente = await ClienteService.createCliente(req.body);
      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const clienteAtualizado = await ClienteService.updateCliente(id, req.body);
      res.json(clienteAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      await ClienteService.deleteCliente(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ClientesController;