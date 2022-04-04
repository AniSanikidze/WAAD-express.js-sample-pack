//@desc GET response
//@route GET /api
const getController = (req, res) => {
    res.status(200).json({message: "GET request was successfully executed"})
}

//@desc POST response
//@route POST /api
const postController = (req, res) => {
    res.status(200).json({message: "POST request was successfully executed"})
}

//@desc PUT response
//@route PUT /api/:id
const putController = (req, res) => {
    var id = req.params.id
    res.status(200).json({message: `PUT request was successfully executed for item with id - ${id}`})
}

//@desc PATCH response
//@route PATCH /api/:id
const patchController = (req, res) => {
    var id = req.params.id
    res.status(200).json({message: `PATCH request was successfully executed for item with id - ${id}`})
}

//@desc DELETE response
//@route DELETE /api/:id
const deleteController = (req, res) => {
    var id = req.params.id
    res.status(200).json({message: `DELETE request was successfully executed for item with id - ${id}`})
}

//Exporting pathControllers
module.exports = {
    getController,
    postController,
    patchController,
    putController,
    deleteController
}