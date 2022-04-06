//@desc GET response
//@route GET /api/redirect
//@status 301(Moved Permanently): The requested resource has been assigned a new permanent URI
const getRedirectController = (req, res) => {
    res.set('location', '/api/success');
    res.status(301).send({message: "The user was redirected"})
}

module.exports = {
    getRedirectController
}