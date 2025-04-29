CREATE DATABASE hr;

\c hr;

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    publisher_name VARCHAR(100) UNIQUE NOT NULL,
    founder VARCHAR(100) NOT NULL
);

CREATE TABLE heros (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    publisher_name VARCHAR(100) REFERENCES publishers(publisher_name) ON DELETE SET NULL
);

INSERT INTO publishers (publisher_name, founder) VALUES 
    ('Marvel', 'Martin Goodman'),
    ('DC Comics', 'Malcolm Wheeler-Nicholson'),
    ('Dark Horse', 'Mike Richardson'),
    ('Image Comics', 'Todd McFarlane');

INSERT INTO heros (name, publisher_name) VALUES 
    ('Homem-Aranha', 'Marvel'),
    ('Batman', 'DC Comics'),
    ('Hellboy', 'Dark Horse'),
    ('Spawn', 'Image Comics');