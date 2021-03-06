# 02-Routing

The application showcases the examples of routing using express.js framework. Example routes are given for GET, POST and PUT methods. The routes as well as respective controllers are configured in separate files - routes/routes.js and controllers/pathController.js.

For GET and POST requests the path is defined as `localhost:8080/api`, while for PUT method, the path is `localhost:8080/api/:id`. This way the application demonstartes possibility of updating an item with respect to the provided id.

The user can change the port number by creating .env file and defining PORT variable with respective port number.

## Testing

`GET` : `localhost:8080/api`

`POST` : `localhost:8080/api`

`PUT` : `localhost:8080/api/:id`

## .env file confirguration

The default port number 8080 can be modified by creating .env file in the root directory and defining desired port number. 
Example of defining port variable in .env file:
`PORT = 3000`

## Running the application

`npm install`

`npm start`

The application runs with nodemon module that will automatically restart the node application.

## Error handling

The application handles errors that occur while executing API request to the provided path. For example, if the path is not correct, or API Request is not valid, the application sends back json error message with 404 status code. The function is configured in a spearate file and is imported in index.js.