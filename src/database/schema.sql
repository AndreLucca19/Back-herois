CREATE DATABASE heros;

\c heros;

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    publisher_name VARCHAR(100) UNIQUE NOT NULL,
    founder VARCHAR(100) NOT NULL
);

CREATE TABLE hero (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    publisher_name VARCHAR(100) REFERENCES publishers(publisher_name) ON DELETE SET NULL
);

INSERT INTO publishers (publisher_name, founder) VALUES 
    ('Marvel', 'Martin Goodman'),
    ('DC Comics', 'Malcolm Wheeler-Nicholson'),


INSERT INTO hero (name, publisher_name) VALUES 
    ('Homem-Aranha', 'Marvel'),
    ('Batman', 'DC Comics'),
    ('Doutor Estranho', 'Marvel')
    ('Flash', 'DC Comics')

ALTER TABLE hero ADD COLUMN photo TEXT;