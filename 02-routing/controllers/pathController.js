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

//Exporting pathControllers
module.exports = {
    getController,
    postController,
    patchController,
    putController,
    deleteController
}