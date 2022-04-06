# 03-GET-Query

The application showcases parsing of queries when executing GET request on the following path: localhost:8080/users?. The user should provide `name` and `id` query parameters with respective values, which will be compared by the application to the users array to find the user matching provided parameters.

If `name` and `id` parameters are nto provided application raises error. 404 error is sent when both parameters ar eprovided but don't match with stored users.

Example queries:

`GET`: `localhost:8080/users?name=user1&&id=1`

`GET`: `localhost:8080/users?name=user1`

The user can change the port number by creating .env file and defining PORT variable with respective port number.

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