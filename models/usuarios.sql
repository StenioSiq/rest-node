CREATE TABLE IF NOT EXISTS usuarios(
	id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(70) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    token VARCHAR(255)
);
-- Dados iniciais para teste
INSERT INTO usuarios (usuario,senha,token) VALUES
-- hash: senhasteste
	('Beta Tester','$2a$10$NSDfd5BgTBcZ0Ve.W0Dq7.zNa293T3eTEyps2cm9ErD.klvngDcOm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'),
-- hash: testesenhas
    ('Alpha Tester','$2a$10$fnPDCXn2iZLqDfrO6g5OceiqrbAc2jBqWfqPQczc5MZrc74TEsX0.','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30');
