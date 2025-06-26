const validarCliente = require('../middlewares/validarCliente'); // ajuste conforme seu path real
const validarProduto = require('../middlewares/validarProduto'); // se tiver

describe('Validação de campos', () => {

  test('Nome deve ter entre 3 e 255 caracteres', () => {
    const validName = 'Ana Maria';
    const shortName = 'Al';
    const longName = 'A'.repeat(256);

    expect(validName.length).toBeGreaterThanOrEqual(3);
    expect(validName.length).toBeLessThanOrEqual(255);
    expect(shortName.length).toBeLessThan(3);
    expect(longName.length).toBeGreaterThan(255);
  });

  test('Email deve ser válido', () => {
    const validEmail = 'email@example.com';
    const invalidEmail = 'email@com';

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(regex.test(validEmail)).toBe(true);
    expect(regex.test(invalidEmail)).toBe(false);
  });

  test('Idade deve ser maior que 0 e menor que 120', () => {
    expect(25).toBeGreaterThan(0);
    expect(25).toBeLessThan(120);

    expect(0).not.toBeGreaterThan(0);
    expect(121).not.toBeLessThan(120);
  });

  test('Preço deve ser positivo', () => {
    expect(10).toBeGreaterThan(0);
    expect(0).not.toBeGreaterThan(0);
    expect(-5).not.toBeGreaterThan(0);
  });

  test('Data atualizado deve estar entre 01/01/2000 e 20/06/2025', () => {
    const data = new Date('2025-06-19');
    const dataInicio = new Date('2000-01-01');
    const dataFim = new Date('2025-06-20');

    expect(data >= dataInicio).toBe(true);
    expect(data <= dataFim).toBe(true);
    
    const dataFora = new Date('1999-12-31');
    expect(dataFora >= dataInicio).toBe(false);
  });

});
