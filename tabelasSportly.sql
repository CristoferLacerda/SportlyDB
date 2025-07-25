DROP DATABASE IF EXISTS sportlyDB;

CREATE DATABASE sportlyDB;
USE sportlyDB;

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL,
    telefone INT,
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

CREATE TABLE inscrição_curso(
    id_inscricao INT PRIMARY KEY AUTO_INCREMENT,
    data_inscricao DATE NOT NULL,
    situacao STATUS NOT NULL
);

CREATE TABLE curso(
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(30) NOT NULL,
    descricao VARCHAR(60) NOT NULL,
    carga_horaria INT NOT NULL,
    link_video VARCHAR(60) NOT NULL
);

CREATE TABLE esporte(
    id_esporte INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    modalidade VARCHAR(30) NOT NULL,
    nivel VARCHAR NOT NULL
);

CREATE TABLE instrutor(
    id_instrutor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    especialidade VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL
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