//Importing express.js module
const express = require('express')
//Initializing express.js app
const app = express()
const cookieParser = require('cookie-parser')
//Importing dotenv module to load environment variables
require('dotenv').config()

//Assigning port variable value provided in the .env file. 
//If the port number is not provided in the .env file, by default, the port will be 8080.
const port = process.env.PORT || 8080

//Enabling parsing cookies and request bodies
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Middleware function for checking cookies
const validateCookie = (req, res, next) => {
    const {cookies} = req
    if ('session_id' in cookies) {
        if (cookies.session_id != 'session value'){
            res.status(404).json({message: 'Incorrect session_id was provided'})
        }
        else{
            next()
        }
    }
    else {
        res.status(404).json({message: 'Session id was not provided'})
    }
}

//Configuring POST route to the path - 'localhost:8080/signin'. 
//If username was provided, the request sends back cookie.
//otherwise, raises an error
app.post('/signin', (req, res) => {
    const username = req.body.username
    if (req.body.hasOwnProperty('username')) {
        res.cookie('session_id', 'session value')
        res.status(200).json({message: "User was logged in"})
    }
    else {
        res.status(404).json({message: 'Username was not provided'})
    }
})

//Validates provided cookie by calling the middleware function - validateCookie
app.get('/authorized', validateCookie, (req,res) => {
    res.status(200).json({message: 'The user is authorized'})
})


//Middleware function which handles errors and sends error message if invalid paths or API requests are called.
app.use((req, res) => {
    const error = new Error('Error occured while executing API request to the provided path!');
    res.status(404).json({error: error.message})
})

//The application is started on the port provided in the .env file. By default the port is defined as 8080.
app.listen(port, () => console.log(`Server running on port ${port}`))