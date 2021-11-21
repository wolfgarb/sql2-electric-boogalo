const inquirer = require('inquirer');
const table = require('console.table');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3305;

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'employee_db',
  },
  console.log(`Connected on ${PORT}`)
);

db.connect(function (err) {
  if (err) {
    console.log(err);
  }
  init();
});

function init() {
  console.log('Welcome to the employee tracker');
}
