//Importing express.js module
const express = require('express')
//Using express.Router class to create modular, mountable route handlers
const router = express.Router()
//Importing pathControllers

const {getSuccessController,
       postSuccessController,
       deleteSuccessController} = require('../controllers/successControllers')

const {getRedirectController} = require('../controllers/redirectionControllers')

const {postBadRequestController, getUnauthorizedRequestController,
       getForbiddenReuqestController, methodNotAllowed, internalServerErrorController} = require('../controllers/errorControllers')


//2xx Success
//Calling GET and POST requests with respective controllers on path localhost:8080/api/success. 
//Requests send status codes 200(OK) and 201(Created) and respective messages in json. 
router.route('/success').get(getSuccessController).post(postSuccessController)
//Calling DELETE requests with deleteSuccessController on path localhost:8080/api/success/:id.
//The following request sends the status code 204(No Content) and the json message.
router.route('/success/:id').delete(deleteSuccessController)

//3xx Redirection
//Calling GET request on path: localhost:8080/api/redirect.
//It redirects user to the provided URL and sends the status code of 301(redirected Permanently).
router.route('/redirect').get(getRedirectController)

//4xx Client Error
//Calling POST and GET requests on path: localhost:8080/api/error.
//Requests send client errors, in particular, 400(Bad Request) and 401(Unauthorized Request)
router.route('/error').post(postBadRequestController).get(getUnauthorizedRequestController)
//Calling GET request on path: localhost:8080/api/error/super-secret.
//The request sens back status code 403(Forbidden) indicating that access is denied.
router.route('/error/super-secret').get(getForbiddenReuqestController)
//The following methods accepts only PUT request to be called on the path: localhost:8080/api/error/only-put.
//Error 405(Method Not Allowed) is sent if any other http method is used.
router.route('/error/only-put').all(methodNotAllowed)

//5xx Server Error
//POST request is called on path localhost:8080/api/error/server which retrieves error 500 (Internal Server Error).
router.route('/error/server').post(internalServerErrorController)

//Exporting router
module.exports = router