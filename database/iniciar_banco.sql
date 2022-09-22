CREATE SCHEMA roadmap;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE roadmap.user(
	name varchar(100) NOT NULL,
	email varchar(200) UNIQUE NOT NULL,
	registration varchar(11) UNIQUE NOT NULL,
	birth_date date NOT NULL,
	period smallint,
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4 ()
);
