//@desc GET response
//@route GET /api
//Used for used to retreive data from a server at the specified resource
const getController = (req, res) => {
    //logic for retrieving data
    res.status(200).json({message: "GET request was successfully executed"})
}

//@desc POST response
//@route POST /api
//Used for adding a new resource to the server
const postController = (req, res) => {
    //logic for creating new data
    res.status(200).json({message: "POST request was successfully executed"})
}

//@desc PUT response
//@route PUT /api/:id
//Used to modify a single resource which is already a part of resources collection
const putController = (req, res) => {
    var id = req.params.id
    //logic for modifying resource
    res.status(200).json({message: `PUT request was successfully executed for item with id - ${id}`})
}

//@desc PATCH response
//@route PATCH /api/:id
//Used for making partial changes to an existing resource
const patchController = (req, res) => {
    var id = req.params.id
    //logic for changing part of an existing data
    res.status(200).json({message: `PATCH request was successfully executed for item with id - ${id}`})
}

//@desc DELETE response
//@route DELETE /api/:id
//Used to delete a resource from the server
const deleteController = (req, res) => {
    var id = req.params.id
    //logic for deleting data
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