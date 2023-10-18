-- Criação do banco de dados SQLite
CREATE DATABASE IF NOT EXISTS medcheck_db_express;

-- Utilização do banco de dados
USE medcheck_db_express;

CREATE TABLE Especialidades (
    idEspecialidade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE Administradores (
	idAdmin INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(250) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE Medicos (
	idMedico INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idEspecialidade INT NOT NULL,
	nome VARCHAR(250) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
	sexo CHAR NOT NULL,
    numeroResgistro VARCHAR(50) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    FOREIGN KEY (idEspecialidade) REFERENCES Especialidades(idEspecialidade)
);

CREATE TABLE Agendas (
	idAgenda INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idMedico INT NOT NULL,
	dataAgenda DATE NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    FOREIGN KEY (idMedico) REFERENCES Medicos(idMedico)
);

CREATE TABLE Pacientes (
	idPaciente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(250) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    sexo CHAR NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    dataNascimento DATE,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE Prontuarios (
	idProntuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idPaciente INT NOT NULL,
	descricao VARCHAR(250) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    FOREIGN KEY (idPaciente) REFERENCES Pacientes(idPaciente)
);

CREATE TABLE Consultas (
    idConsulta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idMedico INT NOT NULL,
    idPaciente INT NOT NULL,
    dataConsulta DATE NOT NULL,
    dataMarcacao DATE NOT NULL,
    tipoConsulta VARCHAR(25),
    isRealizada BOOLEAN NOT NULL DEFAULT FALSE, 
    createdAt DATE,
    updatedAt DATE,
    FOREIGN KEY (idMedico) REFERENCES Medicos(idMedico),
    FOREIGN KEY (idPaciente) REFERENCES Pacientes(idPaciente)
);

-- Inserir especialidades
INSERT INTO Especialidades (nome, createdAt, updatedAt) VALUES
    ('Cardiologia', NOW(), NOW()),
    ('Dermatologia', NOW(), NOW()),
    ('Ortopedia', NOW(), NOW()),
    ('Pediatria', NOW(), NOW()),
    ('Ginecologia', NOW(), NOW());

-- Inserir administradores
INSERT INTO Administradores (nome, email, senha, createdAt, updatedAt) VALUES
    ('Admin1', 'admin1@example.com', 'senha123', NOW(), NOW()),
    ('Admin2', 'admin2@example.com', 'senha456', NOW(), NOW());

-- Inserir médicos
INSERT INTO Medicos (idEspecialidade, nome, email, senha, sexo, numeroResgistro, createdAt, updatedAt) VALUES
    (1, 'Dr. Cardiologista', 'cardio@example.com', 'senhaMedico1', 'M', 'CR12345', NOW(), NOW()),
    (2, 'Dra. Dermatologista', 'derma@example.com', 'senhaMedico2', 'F', 'CR67890', NOW(), NOW()),
    (3, 'Dr. Ortopedista', 'orto@example.com', 'senhaMedico3', 'M', 'CR54321', NOW(), NOW());

-- Inserir agendas
INSERT INTO Agendas (idMedico, dataAgenda, createdAt, updatedAt) VALUES
    (1, '2023-10-18', NOW(), NOW()),
    (2, '2023-10-19', NOW(), NOW()),
    (3, '2023-10-20', NOW(), NOW());

-- Inserir pacientes
INSERT INTO Pacientes (nome, email, senha, sexo, cpf, createdAt, updatedAt) VALUES
    ('Paciente1', 'paciente1@example.com', 'senhaPaciente1', 'M', '123.456.789-01', NOW(), NOW()),
    ('Paciente2', 'paciente2@example.com', 'senhaPaciente2', 'F', '987.654.321-09', NOW(), NOW()),
    ('Paciente3', 'paciente3@example.com', 'senhaPaciente3', 'M', '456.789.012-34', NOW(), NOW());

-- Inserir prontuários
INSERT INTO Prontuarios (idPaciente, descricao, createdAt, updatedAt) VALUES
    (1, 'Histórico de doenças cardíacas', NOW(), NOW()),
    (2, 'Problemas de pele recorrentes', NOW(), NOW()),
    (3, 'Fratura no braço direito', NOW(), NOW());

-- Inserir consultas
INSERT INTO Consultas (idMedico, idPaciente, dataConsulta, dataMarcacao, tipoConsulta, isRealizada, createdAt, updatedAt) VALUES
    (1, 1, '2023-10-18', '2023-10-15', 'Cardiologia', TRUE, NOW(), NOW()),
    (2, 2, '2023-10-19', '2023-10-16', 'Dermatologia', FALSE, NOW(), NOW()),
    (3, 3, '2023-10-20', '2023-10-17', 'Ortopedia', FALSE, NOW(), NOW());

SELECT * FROM Consultas;

SELECT C.*, M.nome AS nomeMedico
FROM Consultas C
JOIN Medicos M ON C.idMedico = M.idMedico
WHERE C.idMedico = 1 AND C.isRealizada = TRUE;
