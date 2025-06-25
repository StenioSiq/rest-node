CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    token VARCHAR(512)
);

INSERT INTO usuarios (usuario, senha) VALUES
    ('Stenio','$2a$10$aD3ySPYU1ZTwMZpsaDTI8uPaFH.hdnOzahrfTpIHdfBF5rHG6ci2m'),
    ('Kaua','$2a$10$UzUWdRJ8b7G6DpBeMWMx8eduKmO/zFG1NpV9rzADkMbWM3MKRd6NS');