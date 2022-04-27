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

-- CREATE TABLE Book (
-- 	id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50) NOT NULL,
-- 	author VARCHAR(50) NOT NULL
-- );

-- INSERT INTO Book (title, author)
-- VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- CREATE TABLE Student (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(25) UNIQUE NOT NULL,
-- 	age SMALLINT CHECK(age <= 15)
-- );

-- INSERT INTO Student (name, age)
-- VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

CREATE TABLE Library (
	book_id INTEGER NOT NULL,
	student_id INTEGER NOT NULL,
	borrowed_date DATE,
	
	PRIMARY KEY (book_id, student_id),
	FOREIGN KEY (book_id) REFERENCES Book(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (student_id) REFERENCES Student(id) ON DELETE CASCADE ON UPDATE CASCADE
)

INSERT INTO Library (book_id, student_id, borrowed_date)
VALUES
(
	(SELECT id FROM Book WHERE title ILIKE '%Alice in Wonderland%'),
	(SELECT id FROM Student WHERE name ILIKE '%John%'),
	'02/15/2022'
),
(
	(SELECT id FROM Book WHERE title ILIKE '%To kill a mockingbird%'),
	(SELECT id FROM Student WHERE name ILIKE '%Bob%'),
	'03/03/2021'
),

(
	(SELECT id FROM Book WHERE title ILIKE '%Alice in Wonderland%'),
	(SELECT id FROM Student WHERE name ILIKE '%Lera%'),
	'05/23/2021'
),

(
	(SELECT id FROM Book WHERE title ILIKE '%Harry Potter%'),
	(SELECT id FROM Student WHERE name ILIKE '%Bob%'),
	'08/12/2021'
)

-- Select all the columns from the junction table
SELECT * FROM Library

-- Select the name and title of the borrowed books
SELECT name, title
FROM Student, Book
WHERE
Student.id IN (SELECT student_id FROM Library)
AND
Book.id IN (SELECT book_id FROM Library)
GROUP BY name, title

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(age)
FROM Student
WHERE Student.id IN
(SELECT student_id FROM Library
 WHERE book_id IN (
	 SELECT id FROM Book WHERE title ILIKE '%Alice in Wonderland%'
 )
)

-- SELECT AVG(age)
-- FROM Library
-- INNER JOIN book ON Book.id = Library.book_id
-- INNER JOIN Student ON Student.id=Library.student_id
-- Where title ILIKE '%Alice in Wonderland%'

DELETE FROM Student WHERE id = 4;
SELECT * FROM Library











