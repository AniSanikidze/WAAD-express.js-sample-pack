# 10-EJS-Templates

The application demonstrates how to use ejs template for serving dynamic data using express.js framework. GET request is called on path: `localhost:8080/:query`. If the provided query parameter is 'movies', then the application displays list of movies. Otherwise, if any other query paramter is provided the application displays provided query.

The user can change the port number by creating .env file and defining PORT variable with respective port number.

## Testing

`GET` : `localhost:8080/movies`

`GET` : `localhost:8080/books`

## .env file confirguration

The default port number 8080 can be modified by creating .env file in the root directory and defining desired port number. 
Example of defining port variable in .env file:
`PORT = 3000`

## Running the application

`npm install`

`npm start`

The application runs with nodemon module that will automatically restart the node application.

## Error Middleware

The application handles errors that occur while executing API request to the provided path. For example, if the path is not correct, or API Request is not valid, the application sends back json error message with 404 status code. The function is configured in a spearate file and is imported in index.js.