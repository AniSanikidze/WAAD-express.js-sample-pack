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


app.set('view engine', 'ejs')

//Calling GET request on path: localhost:8080/:query
//If the provided query parameter is 'movies', then the application displays list of movies
//Otherwise, if any other query paramter is provided the application displays provided query.
app.get('/:query', (req, res) => {
    var query = req.params.query
    var movies = ['movie1','movie2','movie3']
    if (query == 'movies') {
        res.render('index', {query: req.params.query,
                            searchResults: movies})
    } else {
        res.render('index', {query: req.params.query})
    } 
});

//Using errorHanlder 
app.use(errorHandler)

//The application is started on the port provided in the .env file. By default the port is defined as 8080.
app.listen(port, () => console.log(`Server running on port ${port}`))