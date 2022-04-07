//Middleware function which handles errors and sends error message if invalid paths or API requests are called.
const errorHandler = (req, res ) => {
    const error = new Error('Error occured while executing API request to the provided path!');
    res.status(404).json({error: error.message})
}
//Exporting errorHanlder function
module.exports = {errorHandler}