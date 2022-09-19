CREATE SCHEMA roadmap;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE roadmap.usuario(
	nome varchar(100) NOT NULL,
	email varchar(200) UNIQUE NOT NULL,
	matricula varchar(11) UNIQUE NOT NULL,
	data_nascimento date NOT NULL,
	periodo smallint,
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4 ()
);
