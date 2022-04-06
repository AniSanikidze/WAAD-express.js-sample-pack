//@desc POST response
//@route POST /error
//@status 400(Bad Request): The request could not be understood by the server due to malformed syntax.
const postBadRequestController = (req, res) => {
    res.status(400).json({message : "Bad request was provided"})
}
//@desc GET response
//@route GET /error
//@status 401(Unauthorized): The request requires user authentication.
const getUnauthorizedRequestController = (req,res) => {
    res.status(401).json({message : "You need to authorize to view this"})
}
//@desc GET response
//@route GET /error/super-secret
//@status 403(Forbidden): The server understood the request, but is refusing to fulfill it.
const getForbiddenReuqestController = (req,res) => {
    res.status(403).json({message : "You are forbidden from seeing this"})

}
//@desc All methods except PUT response
//@route All methods except PUT /error/only-put
//@status 405(Method Not Allowed): The method specified in the Request-Line 
//is not allowed for the resource identified by the Request-URI.
const methodNotAllowed = (req,res) => {
    if(req.method == "PUT") res.status(204).end()
    else res.status(405).json({message : "Please use PUT method"})
}
    
//@desc POST response
//@route POST /error/server
//@status 500(Internal Server Error): The server encountered an unexpected condition
//which prevented it from fulfilling the request.
const internalServerErrorController = (req,res) => {
    res.status(500).json({message : "Internal server error occured"})
}

module.exports = {
    postBadRequestController,
    getUnauthorizedRequestController,
    getForbiddenReuqestController,
    methodNotAllowed,
    internalServerErrorController
}