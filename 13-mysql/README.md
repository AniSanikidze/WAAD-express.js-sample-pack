# 13-MySQL-Example

The application is a simple REST API connected to a mysql database. GET,POST,DELETE, and PUT methods are configured and matched with CRUD database commands. 

The user can change the port number by creating .env file and defining PORT variable with respective port number. Additionally, the user should provide credentials in .env file for establishing connection to mysql database.

## .env file confirguration

The default port number 8080 can be modified by creating .env file in the root directory and defining desired port number. 
Example of defining port variable in .env file:
`PORT = 3000`

In order to establish connection with mysql database, the user should provide the following variables: `LIMIT`, `HOST`,`USER`,`PASSWORD`,`DATABASE`
Below is the example of defining these variables: 
`
LIMIT = 100
HOST = 'localhost'
USER = 'root'
PASSWORD = 'password'
DATABASE = 'crud-database'

`

## Testing

`GET`: `localhost:8080/api/:id` 

`POST`: `localhost:8080/api` : `first_name` and `last_name` should be provided in the request body

`PUT`: `localhost:8080/api/:id` : `first_name` and `last_name` should be provided in the request body

`DELETE`: `localhost:8080/api/:id` 

## Running the application

`npm install`

`npm start`

The application runs with nodemon module that will automatically restart the node application.

## Error handling

The application handles errors that occur while executing API request to the provided path. For example, if the path is not correct, or API Request is not valid, the application sends back json error message with 404 status code.