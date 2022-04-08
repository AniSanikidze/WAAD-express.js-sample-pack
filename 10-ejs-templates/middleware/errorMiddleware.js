//Middleware function which handles errors and sends error message if invalid paths or API requests are called.
//@status 404(Not Found): The server has not found anything matching the Request-URI.
const errorHandler = (req, res ) => {
    const error = new Error('Error occured while executing API request to the provided path!');
    res.status(404).json({error: error.message})
}

//Exporting errorHanlder function
module.exports = {errorHandler}