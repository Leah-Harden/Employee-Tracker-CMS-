
//require  ----------
const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const env = require('dotenv');
//require  ----------

// Connect to database  ----------
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: process.env.password,
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
                    add a department, add a role, add an employee, or update an employee role`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
]

// // the first path


function switchPath(answer) {
    switch (answer) {
        case 'view all departments':
            // code block
            break;
        case 'view all roles':
            // code block
            break;
        case 'view all employees':
            // code block
            break;
        case 'add a department':
            // code block
            break;
        case 'add a role':
            // code block
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
function viewRoles() {
    db.query('SELECT * FROM role_employee', (err, result) => {
    
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


// // update employees

function start(){
    inquirer
        .prompt(firstLine)
}

start()