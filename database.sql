-- Don't forget to add your create table SQL 
Database name: shopping_list

CREATE TABLE "items" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) not null,
	"quantity" DECIMAL not null,
	"unit" varchar(20) not null,
	"completed" boolean default false
);
INSERT INTO "items" ("name", "quantity", "unit", "completed")
VALUES 
('Milk', '1', 'Gallon', true),
('Donuts', '7', 'Dozen', false), ('Apples', '4', 'Bag', false);


-- ~~~~~~~~~~~~~ TEST DATA BELOW  ~~~~~~~~~~~~~

--test the delete:
DELETE FROM "items" WHERE "id" = 4;

--test the Get:
SELECT * FROM "items" ORDER BY "completed" DESC, "name" ASC;

--test the Put:
UPDATE "items" SET "completed" = 'true' WHERE "id" ='1';

INSERT INTO "items" ("name", "quantity", "unit", "completed")
VALUES('test','53','test','true')

--testing emptying entire table
DELETE FROM "profile";