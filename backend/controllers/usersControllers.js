//here we create new data that we want to pass to front end
exports.usersController = (req, res) => {
    req.json({
        usersList: ["user 1", "user 2"]
    })
}