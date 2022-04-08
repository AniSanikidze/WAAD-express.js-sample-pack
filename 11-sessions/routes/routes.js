//Importing express.js module
const express = require('express')
//Using express.Router class to create modular, mountable route handlers
const router = express.Router()
//Importing pathControllers
const {
    getController,
    postController,
    deleteController} = require('../controllers/pathController')

//Calling GET,POST and DELETE requests with respective controllers on path localhost:8080/api/user
router.route('/user').get(getController).post(postController).delete(deleteController)

//Exporting router
module.exports = router