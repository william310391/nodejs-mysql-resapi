CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary INT(5) DEFAULT NULL,
PRIMARY KEY(id)
);

describe employee;

INSERT INTO employee VALUES
(1,'John',1000),
(2,'Henry',1000),
(3,'Bob',1000),
(4,'Julie',1000);


DELETE FROM employee WHERE id=2;