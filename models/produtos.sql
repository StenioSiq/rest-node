CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  data_atualizado DATETIME NOT NULL
);

-- Dados inicias para teste
INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES
    ('Espada','Gládio', 1600.00, NOW()),
    ('Meditações','Livro', 39.99, NOW());