DROP DATABASE IF EXISTS sportlyDB;

CREATE DATABASE sportlyDB;
USE sportlyDB;

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL,
    telefone VARCHAR(15),
    cpf CHAR(11) NOT NULL UNIQUE
);

CREATE TABLE endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    rua VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado CHAR(2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE curso(
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(30) NOT NULL,
    descricao VARCHAR(60) NOT NULL,
    carga_horaria SMALLINT NOT NULL,
    link_video VARCHAR(60) NOT NULL
);


CREATE TABLE inscrição_curso(
    id_inscricao INT PRIMARY KEY AUTO_INCREMENT,
    id_curso INT NOT NULL,
    data_inscricao DATE NOT NULL,
    situacao ENUM('Ativa', 'Concluida', 'Cancelada') NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);


CREATE TABLE esporte(
    id_esporte INT PRIMARY KEY AUTO_INCREMENT,
    id_curso INT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    modalidade VARCHAR(30) NOT NULL,
    nivel VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);


CREATE TABLE instrutor(
    id_instrutor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_curso INT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    especialidade VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);

CREATE TABLE pedido(
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    data_pedido DATE NOT NULL,
    valor_total FLOAT NOT NULL
);

CREATE TABLE pagamento(
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    data_pagamento DATE NOT NULL,
    valor FLOAT NOT NULL,
    forma_pagamento VARCHAR(20) NOT NULL
);

CREATE TABLE produto(
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    preco FLOAT NOT NULL,
    estoque INT NOT NULL,
    descricao VARCHAR(45)
);

CREATE TABLE categoria_produto(
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(60)
);

INSERT INTO cliente (nome, email, telefone, cpf)
VALUES ('Nicollas Matias', 'nicollasmatias@gmail.com', '5313964628', '02477045037'),
('Jorel Silva', 'jorelsilva@gmail.com', '5321481354', '47071085372'),
('Raphael Rosa', 'raphaelrosa@gmail.com', '53991083783', '72081084612');

INSERT INTO endereco (id_cliente, rua, numero, bairro, cidade, estado)
VALUES (1, 'Gonçalves Chaves', 179, 'Retiro', 'Curitiba', 'SC'),
(2, 'Bento Freitas', 69, 'Fragata', 'Londres', 'RJ'),
(3, 'Manuel Pinto Bandeira', 789, 'Navegantes', 'Rolandia', 'RS');

INSERT INTO curso (titulo, descricao, carga_horaria, link_video)
VALUES ('Queimada - Introdução', 'Curso básico de introdução ao esporte queimada', 2, 'sportly.com/int-queimada'),
('Futebol - Dribles', 'Curso de dribles básicos do futebol', 3, 'sportly.com/dribles-futebol');

INSERT INTO esporte (id_curso, nome, modalidade, nivel)
VALUES (1, 'Queimada', 'Infantil', 'Educativo'),
(2, 'Futebol', 'Masculino', 'Intermediario');

INSERT INTO instrutor (id_curso, nome, especialidade, email)
VALUES (1, 'Valéria Nunes', 'Educação Física', 'valerianunes@gmail.com'),
(2, 'Carlos Alberto', 'Educação Física', 'carlosalberto@gmail.com');

UPDATE cliente SET telefone = CASE
    WHEN id_cliente = 1 THEN 53991203040
    WHEN id_cliente = 2 THEN 53984234358
    WHEN id_cliente = 7 THEN 53991445381
    ELSE telefone
END
WHERE id_cliente IN (1, 2, 3);   