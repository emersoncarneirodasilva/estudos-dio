CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE  
)

INSERT INTO pessoas (nome, nascimento) VALUES ('Emerson', '1987 12 18')
INSERT INTO pessoas (nome, nascimento) VALUES ('Raiane', '1990 12 18')