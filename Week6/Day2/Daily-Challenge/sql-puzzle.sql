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

-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


SELECT * FROM SecondTab

SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- Expectation: 3
-- Result 0

SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- Expectation: 2
-- Result 2

SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- Expectation: 2
-- Result 0

SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- Expectation: 2
-- Result 2