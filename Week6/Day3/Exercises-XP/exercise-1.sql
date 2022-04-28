-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

SELECT name
FROM language
GROUP BY language.name

SELECT title, description, name
FROM film
LEFT JOIN language
ON film.language_id = language.language_id

SELECT title, description, name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id

CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(200)
)

INSERT INTO new_film (name)
VALUES
('newFilm'),
('FilmNew'),
('new_film');

CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER,
	language_id INTEGER,
	title VARCHAR(200),
	score INTEGER CHECK(score BETWEEN 1 AND 10),
	review_text VARCHAR,
	last_update DATE,
	
	fk_review_id INTEGER REFERENCES film(film_id),
	fk_language_id INTEGER REFERENCES language(language_id)
)

INSERT INTO customer_review (title, score, review_text, last_update)
VALUES
('Shrek2', 10, 'Best Movie Ever', '03/03/2009'),
('Eurotrip', 10, 'Best Traveling Movie Ever', '03/09/2011')