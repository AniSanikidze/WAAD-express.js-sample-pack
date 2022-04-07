//Importing express.js module
const express = require('express')
//Initializing express.js app
const app = express()
//Importing path module
const path = require('path')
//Importing dotenv module to load environment variables
require('dotenv').config()

//Assigning port variable value provided in the .env file. 
//If the port number is not provided in the .env file, by default, the port will be 8080.
const port = process.env.PORT || 8080
//Importing errorHandler
const {errorHandler} = require('./middleware/errorMiddleware')

//Enables using files from 'static' directory
app.use(express.static('static'));

//Calling GET request on path: localhost:8080/express-logo
//Sends back index.html file from static folder
app.get('/express-logo', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
//Using errorHanlder 
app.use(errorHandler)

//The application is started on the port provided in the .env file. By default the port is defined as 8080.
app.listen(port, () => console.log(`Server running on port ${port}`))