# 03-HTTP-Codes

The application showcases examples of retrieving different http status codes by making http requests to a server created using express.js framework. The routes as well as respective controllers are configured separately in `routes` and `controllers` folders.

Controllers are divided in 3 categories: successControllers, redirectionControllers and errorControllers. All listed controllers retrieve specific status codes and repsective messages in json. 

The user can change the port number by creating .env file and defining PORT variable with respective port number.

## HTTP Status Codes showcased:
Below is given http status codes that were implemented in the application and can be demonstrated by making appropriate request to the given URL.
Status codes, respective URLs and request methods are listed.

### 2XX Success
`200(OK)`: `localhost:8080/api/success` : `GET`
`201(Created)`: `localhost:8080/api/success` : `POST` : takes one parameter - `username`
`204(No Content)`: `localhost:8080/api/success/:id` : `DELETE` 

### 3XX Redirection
`301(Moved Permanently)`: `localhost:8080/api/redirect` : `GET`

### 4XX Client Error
`400(Bad Request)`: `localhost:8080/api/error` : `POST`
`401(Unauthorized)`: `localhost:8080/api/error` : `GET`
`403(Forbidden)`: `localhost:8080/api/error/super-secret` : `GET`
`404(Not Found)`: any invalid path or request
`405(Method Not Allowed)`: `localhost:8080/api/error/only-put` : `PUT` 

### 5XX Server Error
`500(Internal Server Error)`: `localhost:8080/api/error/server` : `POST`

## .env file confirguration

The default port number 8080 can be modified by creating .env file in the root directory and defining desired port number. 
Example of defining port variable in .env file:
`PORT = 3000`

## Running the application

`npm install`

`npm start`

The application runs with nodemon module that will automatically restart the node application.

## Error Middleware

Besides errorControllers configured in the errorControllers.js file, the application includes error middleware that handles invalid request paths. by sending back json error message with 404 status code. The function is configured in a separate file and is imported in index.js.