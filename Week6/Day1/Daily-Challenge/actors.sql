-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

SELECT COUNT(actor_id) FROM actors2;

INSERT INTO actors2 (first_name, last_name)
VALUES ('Johny', 'Depp')

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('Johny', 'Depp', '04/10/1968', 1);