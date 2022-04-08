//Importing express.js module
const express = require('express')
//Using express.Router class to create modular, mountable route handlers
const router = express.Router()
//Importing pathControllers
const {
    getController,
    postController,
    putController} = require('../controllers/pathController')

//Calling GET and POST requests with respective controllers on path localhost:8080/api
router.route('/').get(getController).post(postController)
//Calling PUT request on path localhost:8080/api/:id
router.route('/:id').put(putController)
//Exporting router
module.exports = router