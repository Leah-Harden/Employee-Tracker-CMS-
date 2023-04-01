
//require  ----------
const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config;
//require  ----------

// Connect to database  ----------
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: MySQL password 
        password: "new",
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);


// // Connect to database  ----------


// // the first path
const firstLine = [
    {
        type: 'input',
        name: 'first',
        message: ` Would you like to view all departments, view all roles, view all employees,
                    add a department, add a role, add an employee, or update an employee role?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
]

// // the first path

const addRoleText = [
    {
        type: 'input',
        name: 'name',
        message: `What is the name of your role?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
    {
        type: 'input',
        name: 'salary',
        message: `What is the salary of this role?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },

]



function switchPath(res) {
    switch (res) {
        case 'view all departments':
            viewDepartments()
            break;
        case 'view all roles':
            viewRoles()
            break;
        case 'view all employees':
            viewEmployees()
            break;
        case 'add a department':
            // code block
            break;
        case 'add a role':
            addRole()
            break;
        case 'add an employee':
            // code block
            break;
        case 'update an employee role':
            // code block
            break;
    }
}
// // ----------
// // view all departments
function viewDepartments() {
    db.query('SELECT * FROM department', (err, result) => {
        console.table(result)
    
    })
    
}


// // add deparment

// // ----------
// // view all roles
function viewRoles() {
    db.query('SELECT * FROM role_employee', (err, result) => {
        console.table(result)
    
    })
    
}

// // add roles
function addRole() {
    inquirer
    .prompt(addRoleText) 
    .then(res => {
        db.query(
            `ALTER TABLE role_employee ADD ${res.name} ;`, (err, result) => {
                console.log(`role_employee table has been change`)
            })
    })
}

// //----------
// // view all employees
function viewEmployees() {
    db.query('SELECT * FROM role_employee', (err, result) => {
        console.table(result)
    
    })
    
}

// // add employees


// // update employee
const updateEmployee = [
    {
        type: 'input',
        name: 'which',
        message: `Which table would you like to change?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
    {
        type: 'input',
        name: 'name',
        message: `What is the name of your role?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },

]

// ---------------

function start(){
    inquirer
        .prompt(firstLine) 
        .then((res) => {
            switchPath(res)
        })
}

start()