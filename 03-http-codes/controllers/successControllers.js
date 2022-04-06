//@desc GET response
//@route GET /api/success
//@status 200(OK): The request has succeeded
const getSuccessController = (req, res) => {
    res.status(200).json({message: "GET request was successfully executed"})
}

//@desc POST response (stores provided username)
//@route POST /api/success
//@status 201: The request has been fulfilled and resulted in a new resource being created.
const postSuccessController = (req, res) => {
    var username = req.body.username
    res.status(201).json({message: `POST request for storing username - ${username} was successfully executed`})
}

//@desc DELETE response
//@route DELETE /api/success/:id
//@status 204: The server has fulfilled the request but does not need to return an entity-body,
// and might want to return updated metainformation. 
const deleteSuccessController = (req, res) => {
    res.status(204).end()
}

module.exports = {
    getSuccessController,
    postSuccessController,
    deleteSuccessController
}