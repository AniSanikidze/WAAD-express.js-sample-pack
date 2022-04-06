//Importing express.js module
const express = require('express')
//Initializing express.js app
const app = express()
//Importing dotenv module to load environment variables
require('dotenv').config()

//Assigning port variable value provided in the .env file. 
//If the port number is not provided in the .env file, by default, the port will be 8080.
const port = process.env.PORT || 8080
//Importing errorHandler
const {errorHandler} = require('./middleware/errorMiddleware')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Calling POST request on path: localhost:8080/login
//The request checks if required parameters username and password are provided
//If they are provided, then success message is retireved and server sends back
//provided parameters, otherwise error is raised.
app.post('/login', (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    
    if (req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')) {
        res.status(200).json({message: `User provided the following credentials: username - ${username}, password - ${password}`})
    } else {
        res.status(400).json({message: 'Username and password parameters were not provided'})
    }  
})

//Using errorHanlder 
app.use(errorHandler)

//The application is started on the port provided in the .env file. By default the port is defined as 8080.
app.listen(port, () => console.log(`Server running on port ${port}`))