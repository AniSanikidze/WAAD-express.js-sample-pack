//Importing express.js module
const express = require('express')
//Initializing express.js app
const app = express()
//Importing dotenv module to load environment variables
require('dotenv').config()

//Assigning port variable value provided in the .env file. 
//If the port number is not provided in the .env file, by default, the port will be 8080.
const port = process.env.PORT || 8080

//Configuring GET route to the path - '/'. The request sends back "Hello World".
app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
})

//Middleware function which handles errors and sends error message if invalid paths or API requests are called.
app.use((req, res) => {
    const error = new Error('Error occured while executing API request to the provided path!');
    res.status(404).json({error: error.message})
})

//The application is started on the port provided in the .env file. By default the port is defined as 8080.
app.listen(port, () => console.log(`Server running on port ${port}`))