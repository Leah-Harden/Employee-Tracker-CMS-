
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


// Connect to database  ----------


    // // the first path
    const firstLine = [
        {
        type: 'list',
        name: 'first',
        message: ` Would you like to do?`,
        
        choices: ["view all departments", "view all roles", "view all employees",
        "add a department", "add a role", "add an employee","update an employee role"],
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
]

// // the first path


const addDepartmentText = [
    {
        type: 'input',
        name: 'name',
        message: `What is the name of your department?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },

]


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


const addEmployeeText = [
    {
        type: 'input',
        name: 'first',
        message: `What is the first name of employee?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
    {
        type: 'input',
        name: 'last',
        message: `What is the last name of employee?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
    {
        type: 'input',
        name: 'roleID',
        message: `What is the role_id of employee?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    },
    {
        type: 'input',
        name: 'ManagerID',
        message: `What is the manager_id of employee?`,
        validate: (value) => { if (value) { return true } else { return `Please choose something.` } },
    }
]

const updateEmployeeText = [
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



function switchPath(res) {
    switch (res.first) {
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
            addEmployees()
            break;
        case 'update an employee role':
            // code block
            break;
    }
}
// // ----------
// // view all departments
function viewDepartments() {
    db.query('SELECT * FROM departments', (err, result) => {
        if (err) throw err;
        console.table(result);
        start();
    })
    
}


// // add department

function addDepartment() {
    inquirer
    .prompt(addDepartmentText) 
    .then(res => {
        console.log(res)
        db.query(
            `INSERT INTO departments (name) VALUES (?,?,?)`,[res.name], (err, result) => {
                if (err) {console.log(err)} else {
                    console.log(`departments table has been change`)
                };
            })
            start()
        })
}

// // ----------
// // view all roles
function viewRoles() {
    db.query('SELECT * FROM role_employee', (err, result) => {
        if (err) throw err;
        console.table(result)
        start()
    
    })
    
}

// // add roles
function addRole() {
    inquirer
    .prompt(addRoleText) 
    .then(res => {
        console.log(res)
        db.query(
            `INSERT INTO role_employee (title, salary,department_id) VALUES (?,?,?)`,[res.name,parseFloat(res.salary), null], (err, result) => {
                if (err) {console.log(err)} else {
                    console.log(`role_employee table has been change`)
                };
            })
            start()
        })
}

// //----------
// // view all employees
function viewEmployees() {
    db.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        console.table(result)
        start()
    })
    
}

// // add employees
function addEmployees() {
    inquirer
    .prompt(addEmployeeText) 
    .then(res => {
        console.log(res)
        db.query(
            `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`,
            [res.first,res.last, res.roleID, res.managerID], (err, result) => {
                if (err) {console.log(err)} else {
                    console.log(`employee table has been change`)
                };
            })
            start()
        })
}


// // update employee
function addEmployees() {
    inquirer
    .prompt(updateEmployeeText) 
    .then(res => {
        console.log(res)
        db.query(
            `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`,
            [res.first,res.last, res.roleID, res.managerID], (err, result) => {
                if (err) {console.log(err)} else {
                    console.log(`employee table has been change`)
                };
            })
            start()
        })
}



// ---------------

function start(){
    inquirer
        .prompt(firstLine) 
        .then((res) => {
            console.log(res)
            switchPath(res)
        })
}

start()