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
//Importing function for handling GET request queries
const {getUser} = require('./getQuery')

//Calling GET 
app.get('/users', getUser)

//Using errorHanlder 
app.use(errorHandler)

//The application is started on the port provided in the .env file. By default the port is defined as 8080.
app.listen(port, () => console.log(`Server running on port ${port}`))