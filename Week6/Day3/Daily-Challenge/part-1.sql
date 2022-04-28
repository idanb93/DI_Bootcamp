-- Database: Exercises_In_Class

-- DROP DATABASE IF EXISTS "Exercises_In_Class";

-- CREATE DATABASE "Exercises_In_Class"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

CREATE TABLE Customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50) NOT NULL
)

CREATE TABLE Customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER REFERENCES Customer (id) ON DELETE CASCADE ON UPDATE CASCADE
)

ALTER TABLE Customer_profile 
  ADD CONSTRAINT fk_name 
  FOREIGN KEY (customer_id) 
  REFERENCES Customer(id) 
  ON DELETE CASCADE;
  
ALTER TABLE Customer_profile
DROP CONSTRAINT customer_profile_customer_id_fkey


INSERT INTO Customer (first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

SELECT * FROM Customer

INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES
(true,  (SELECT id FROM Customer WHERE first_name ILIKE '%John%')), 
(false, (SELECT id FROM Customer WHERE first_name ILIKE '%jerome%'))

SELECT first_name
FROM Customer
INNER JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id
WHERE isLoggedIn = true;

SELECT first_name, isLoggedIn
FROM Customer
LEFT JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id

SELECT COUNT(first_name)
FROM Customer
INNER JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id
WHERE isLoggedIn = false;