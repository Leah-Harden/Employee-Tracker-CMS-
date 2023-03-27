
//require  ----------
const express = require('express');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
//require  ----------


// Express middleware  ----------

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express middleware  ----------

