
//require  ----------
// const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const env = require('dotenv');

// const PORT = process.env.PORT || 3001;
// const app = express();
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
// // Express middleware  ----------

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Express middleware  ----------

// // the first route
// app.get('/', async (req, res) => {
//     try {
//         res.status(200).json(readerData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // ----------
// // view all departments
// app.get('', async (req, res) => {

// })

// // add deparment
// app.post('', async (req, res) => {

// })

// // ----------
// // view all roles
// app.get('', async (req, res) => {

// })

// // add roles
// app.post('', async (req, res) => {

// })

// // ----------
// // view all employees
// app.get('', async (req, res) => {

// })

// // add employees
// app.post('', async (req, res) => {

// })

// // update employees
// app.post('', async (req, res) => {

// })



// // Default response for any other request (Not Found) ----------
// app.use((req, res) => {
//     res.status(404).end();
// });


// // START
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
