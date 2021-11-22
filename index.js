const { connect } = require('http2');
const inquirer = require('inquirer');
const { Connection } = require('mysql2');
const mysql = require('mysql2');
require('dotenv').config();

// const table = require('console.table');
// const express = require('express');

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

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log(`
  ================================
  Welcome to the employee tracker!
  ================================
                                    __________
                           ________|          |________
                          |       /   ||||||   \       |
                          |     ,'              ',     |
                          |   ,'                  ',   |
                          | ,'   ||||||||||||||||   ', |
                          ,'  /____________________\  '||
                         /______________________________\\
                        |                                |
                        |                                |
                        |                                |
                        |________________________________|
                          |____________________------__|

              ,----------------------------------------------------,
              | [][][][][]  [][][][][]  [][][][]  [][__]  [][][][] |
              |                                                    |
              |  [][][][][][][][][][][][][][_]    [][][]  [][][][] |
              |  [_][][][][][][][][][][][][][ |   [][][]  [][][][] |
              | [][_][][][][][][][][][][][][]||     []    [][][][] |
              | [__][][][][][][][][][][][][__]    [][][]  [][][]|| |
              |   [__][________________][__]              [__][]|| |
              '----------------------------------------------------'
`);
  promptUser();
});

async function promptUser() {
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'directory',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add department',
          'Add role',
          'Add employee',
          'Update employee',
          'Exit',
        ],
      },
    ])
    .then((response) => {
      const { directory } = response;
      switch (directory) {
        case 'View all departments':
          viewDeps();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmps();
          break;
        case 'Add department':
          addDep();
          break;
        case 'Add role':
          addRole();
          break;
        case 'Add employee':
          addEmp();
          break;
        case 'Update employee':
          updateRole();
          break;
        case 'Exit':
          exit();
          break;
      }
    });
}

function viewDeps() {
  let sql = `SELECT * FROM departments`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.table(data);
  });
  // how to format table to avoid it overlapping? promptUser is commented out for now.
  //   promptUser();
}

function viewRoles() {
  let sql = `SELECT * FROM roles`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.table(data);
  });
  //   promptUser();
}

function viewEmps() {
  let sql = `SELECT * FROM employees`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.table(data);
  });
  //   promptUser();
}

async function addDep() {
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'depName',
        message: 'What is the name of the new department?',
      },
    ])
    .then((answer) => {
      db.query(`INSERT INTO departments SET ?`, {
        dep_name: answer.depName,
      });
      console.log('Database updated');
    }),
    console.log(`
    ==================================
    `),
    promptUser();
}

async function addRole() {
  // let sql = `SELECT FROM roles`
  // name, salary, department
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'roleName',
        message: 'Enter the name of the new role:',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: 'Enter the salary associated with this role: (no commas)',
      },
      {
        type: 'input',
        name: 'roleDep',
        message: 'Please enter the department ID for this role: ',
      },
    ])
    .then((answer) => {
      if (answer === 'Other') {
        addDep();
      }
      db.query(`INSERT INTO roles SET ? ? ?`, {
        title: answer.roleName,
        salary: answer.roleSalary,
        department_id: answer.roleDep,
      });
      console.log('Database updated');
    });
  console.log(`
    ==================================
    `);
  promptUser();
}

async function addEmp() {
  // first, last, role, manager
  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the employee first name:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the employee last name:',
      },
      {
        type: 'input',
        name: 'empRole',
        message: 'What is the role ID associated with this employee?',
      },
      {
        type: 'input',
        name: 'empMgr',
        message: 'Please enter the manager ID associated for this employee: ',
      },
    ])
    .then((answer) => {
      if (answer.empRole === 'Other') {
        addRole();
      }
      db.query(`INSERT INTO employees SET ? ? ? ?`, {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.empRole,
        manager_id: answer.empMgr,
      });
      console.log('Database updated');
    });
  console.log(`
    ==================================
    `);
  promptUser();
}

async function updateRole() {
  // update role
}

function exit() {
  console.log(`
  Farewell!
             |                              ____.......__
             |\\      .'           _.--""''''             ''''--._
             | \\   .'/      ..--''                             .-'
      .._    |  \\.' /  ..-''                                .-'
       '.''"-:  '  .-''                                  .-'
         '.             __...----""""""""""--..          \\
         -         ..-''                       ''""-._     \\
       .'  _.      \\                                  '"-   \\
      _.-'' |  /-.  \\                                    '-. \\
            | /   '. \\                                      '.\\
            |/      '-\\                                       '\.
            |
`);
}
