-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- SELECT * FROM items ORDER BY price ASC

-- SELECT * FROM items WHERE price >= 80 ORDER BY price DESC

-- SELECT * FROM items

-- SELECT customer_first_name FROM customers ORDER BY customer_first_name LIMIT 3

-- SELECT customer_last_name FROM customers ORDER BY customer_last_name DESC

-- CREATE TABLE purchases (
	
-- 	purchase_id SERIAL PRIMARY KEY,
-- 	customer_id INTEGER REFERENCES customers (customer_id),
-- 	item_id INTEGER REFERENCES items (item_id),
-- 	quantity_purchased INTEGER DEFAULT 0
-- )

-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES
-- ((SELECT customer_id FROM customers WHERE customer_first_name ='Scott' AND customer_last_name = 'Scott')
--  ,(SELECT item_id FROM items WHERE item_name = 'Fan')
--  ,1),
--  ((SELECT customer_id FROM customers WHERE customer_first_name ='Melanie' AND customer_last_name = 'Johnson')
--  ,(SELECT item_id FROM items WHERE item_name = 'Large Desk ')
--  ,10),
--   ((SELECT customer_id FROM customers WHERE customer_first_name ='Greg' AND customer_last_name = 'Jones')
--  ,(SELECT item_id FROM items WHERE item_name = 'Small Desk')
--  ,2)

-- SELECT * FROM purchases

-- SELECT * FROM purchases INNER JOIN customers ON purchases.customer_id = customers.customer_id;

-- SELECT * FROM purchases WHERE customer_id = 5;

-- SELECT *
-- FROM purchases
-- INNER JOIN items
-- ON purchases.item_id = items.item_id
-- WHERE item_name = 'Small Desk' OR item_name = 'Large Desk ';

-- SELECT * FROM purchases

-- SELECT customer_first_name, customer_last_name, item_name
-- FROM customers, items
-- WHERE (customer_id, item_id) IN (SELECT customer_id, item_id FROM purchases)

-- INSERT INTO purchases (customer_id)
-- VALUES
-- ((SELECT customer_id FROM customers WHERE customer_first_name ='Scott' AND customer_last_name = 'Scott')
-- )