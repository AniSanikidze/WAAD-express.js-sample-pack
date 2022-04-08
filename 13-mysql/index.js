//Importing express.js module
const express = require('express')
//Initializing express.js app
const app = express()
//Importing dotenv module to load environment variables
require('dotenv').config()
//Importing mysql module
let mysql = require('mysql')

//Creating connection pool
let pool = mysql.createPool({
    connectionLimit: process.env.LIMIT,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})
//CREATING student table
let sql = 'CREATE TABLE IF NOT EXISTS student '
sql = sql.concat('(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, ')
sql = sql.concat('first_name varchar(255), last_name varchar(255))')

pool.query(sql, (err, data) => {
    if (err) {
     return console.error('error' + err.message)
    }
    console.log('Connected to MySQL')
})

//Assigning port variable value provided in the .env file. 
//If the port number is not provided in the .env file, by default, the port will be 8080.
const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//GET request retrieves data about the specific student
app.get('/api/:id', (req, res) => {
    let sql = 'SELECT * FROM student where id = ?'
    pool.query(sql, [req.params.id], (err, data) => {
     if (err) {
         console.log(err)
      res.status(404).json({error: 'id not found'})
     }
     else {
      res.json(data)
     }
    })
})
   
//Saves provided student data
app.post('/api', (req, res) => {
    let sql = "INSERT INTO student (first_name, last_name) VALUES (?, ?)"
    pool.query(sql, [req.body.first_name, req.body.last_name], (err, data) => {
     if (err) {
      console.log(err)
      res.status(404).json({error: err.sqlMessage})
     }
     else {
      console.log(data)
      res.json({insertId: data.insertId})
     }
    })
})
   
//Deletes specific student
app.delete('/api/:id', (req, res) => {
    let sql = 'DELETE FROM student WHERE id = ?'
    pool.query(sql, [req.params.id], (err, data) => {
     if (err) {
      console.log(err)
      res.status(404).json({error: 'id not found'})
     } else {
      res.json({affectedRows: data.affectedRows})
     }
    })
})

//Updates data about a specific student
app.put('/api/:id', (req, res) => {
    let sql = 'UPDATE student SET first_name = ?, last_name = ? WHERE id = ?'
    pool.query(sql, [req.body.first_name, req.body.last_name, req.params.id], (err, data) => {
    if (err) {
       console.log(err)
       res.status(404).json({error: 'id not found'})
    } else {
       res.json({affectedRows: data.affectedRows})
    }
    })
})   

//Middleware function which handles errors and sends error message if invalid paths or API requests are called.
app.use((req, res) => {
    const error = new Error('Error occured while executing API request to the provided path!');
    res.status(404).json({error: error.message})
})

//The application is started on the port provided in the .env file. By default the port is defined as 8080.
app.listen(port, () => console.log(`Server running on port ${port}`))