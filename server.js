
//require  ----------
const express = require('express');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const env = require('dotenv');

const PORT = process.env.PORT || 3001;
const app = express();
//require  ----------

// Connect to database  ----------
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: process.env.password,
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
);

// Connect to database  ----------
// Express middleware  ----------

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express middleware  ----------

// Read list of all reviews and associated movie name using LEFT JOIN
app.get('/api/movie-reviews', (req, res) => {
    const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews 
                LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// START
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
