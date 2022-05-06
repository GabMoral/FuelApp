//here we create new data that we want to pass to front end
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) {
        res.status(400)
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        username, 
        password,

    });

    if (user) {
        res.status(201).json({
            _id:user._id,
            username: user.username,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400)
        throw new Error('Error Occured')
    }

});

const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id:user._id,
            username: user.username,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400)
        throw new Error('Invalid username or password')
    }
});


//exports.usersController = (req, res) => {
    //req.json({
        //usersList: ["user 1", "user 2"]
    //})
//}

module.exports = { registerUser, authUser };