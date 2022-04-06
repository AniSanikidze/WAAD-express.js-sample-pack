//Array for users
const users = [
    {
        id: 1,
        name: "user1"
    },
    {
        id: 2,
        name: "user2"
    },
    {
        id: 3,
        name: "user3"
    }
]
//getUser function parses provided query parameters and checks if at least one of the parameters is name or id
//If name or id is provided, then th efunction checks if the user exists in th eusers array and sends success message,
//otherwise the user is not found
//If neither id nor name is provided, then error message: 'Incorrect query parameters provided' is sent by the server
//If no paramateres are provided the server raises error.
const getUser = (req, res) => {
    var query = req.query
    if (Object.keys(query).length == 0){
        res.status(400).json({message: "No parameters provided"})
    }
    else {
        if(query.name || query.id){
            users.map(user => {
                if (user.id == query.id || user.name == query.name) {
                    var parsedQuery = JSON.stringify(query)
                    var parsedUser = JSON.stringify(user)
                    res.status(200).json({message: `Based on provided query - ${parsedQuery}, the following user was found - ${parsedUser}`})
                }
                else{
                    res.status(404).json({message: 'The user was not found'})
                }
            })
    } 
        else {
            res.status(400).json({message: 'Incorrect query parameters provided'})
        }
    }
}

module.exports = {getUser}