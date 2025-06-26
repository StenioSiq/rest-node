const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

describe('Testes de /clientes', () => {
  // Gere um token válido com id fictício para autenticar as requisições
  const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET || 'segredo', { expiresIn: '1h' });

  test('GET /clientes sem token deve retornar 401', async () => {
    const res = await request(app).get('/clientes');
    expect(res.statusCode).toBe(401);
  });

  test('GET /clientes com token válido deve retornar 200 e array', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
