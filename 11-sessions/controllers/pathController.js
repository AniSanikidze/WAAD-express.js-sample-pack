//@desc GET response
//@route GET /api/user
//Retrieves saved username, otherwise raises error
const getController = (req, res) => {
    sess = req.session;
    if(sess.username) {
        res.json("Saved username - " + sess.username);
    }
    else {
        res.status(404).json({message: "Username was not found. Please provide username"});
    }
}

//@desc POST response
//@route POST /api/user
//Saves provided username, othwerise raises error
const postController = (req, res) => {
    sess = req.session;
    if (req.body.hasOwnProperty('username')) {
        sess.username = req.body.username;
        res.status(201).json({message: `Username was saved`})
    } else {
        res.status(400).json({message: 'Username was not provided'})
    }  
}

//@desc DELETE response
//@route DELETE /api/user
//Deletes username if found, othwerwise raises error
const deleteController = (req, res) => {
    sess = req.session;
    if (sess.username){
        delete req.session.username
        res.status(200).json({message: "Username was deleted"})
    }
    else {
        res.status(404).json({message: "Username was not found"})
    }
}

//Exporting pathControllers
module.exports = {
    getController,
    postController,
    deleteController
}