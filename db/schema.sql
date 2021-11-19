DROP DATABASE IF EXISTS sql2_electric_boogaloo;

CREATE DATABASE sql2_electric_boogaloo;

USE sql2_electric_boogaloo;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) not null,
);

create table roles (
    id integer auto_increment primary key,
    title varchar(30) not null,
    salary decimal (6,3),
    department_id integer not null
    foreign key (department_id) references departments(id)
);

create table employees (
    id integer auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id integer not null,
    manager varchar(60),
    foreign key (role_id) references roles(id)
)