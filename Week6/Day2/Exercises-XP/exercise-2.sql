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

SELECT * FROM customer

SELECT (first_name, last_name) AS full_name FROM customer 

SELECT DISTINCT(create_date) FROM customer

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

SELECT address, phone FROM address INNER JOIN customer ON customer.address_id = address.address_id WHERE district = 'Texas'

SELECT * FROM film WHERE film_id = 15 OR film_id = 150

SELECT * FROM film WHERE title = 'Point Break'

SELECT * FROM film WHERE title ILIKE 'Po%'

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10

SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10

SELECT amount, payment_date, payment.customer_id FROM payment INNER JOIN customer ON payment.customer_id = customer.customer_id ORDER BY payment.customer_id ASC

SELECT * FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory)

SELECT city, country FROM city INNER JOIN country ON city.country_id = country.country_id

