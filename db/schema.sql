DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE departments (
id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name: VARCHAR(100) NOT NULL
);

CREATE TABLE role_employee (
    id: INT NOT NULL AUTO_INCREMENT,
    title: VARCHAR(30),
    salary:DECIMAL,
    deparment_id: INT,
    FOREIGN KEY (deparment_id)
    REFERENCES deparment(id)
    ON DELETE SET NULL
)
CREATE TABLE employee (
    id: INT NOT NULL AUTO_INCREMENT,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    role_id: INT,
    manager_id:INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
)