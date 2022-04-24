-- Database: public

-- DROP DATABASE IF EXISTS public;

DROP TABLE IF EXISTS items;

CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR(255),
	price SMALLINT DEFAULT 0
);

INSERT INTO items (item_name, price)
VALUES
('Small Desk', 100),
('Large Desk ', 300),
('Fan', 80);

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	customer_first_name VARCHAR(255),
	customer_last_name VARCHAR(255)
);

INSERT INTO customers (customer_first_name, customer_last_name)
VALUES
('Greg', 'Jones'),
('Sandra ', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * FROM items;

SELECT * FROM customers;

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price < 300;

SELECT * FROM customers WHERE customer_last_name = 'Smith';

SELECT * FROM customers WHERE customer_last_name = 'Jones';

SELECT * FROM customers WHERE NOT (customer_last_name = 'Scott');