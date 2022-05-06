//here we create new data that we want to pass to front end
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const Profile = require('../models/profileModel');
const generateToken = require("../utils/generateToken");

const completeProfile = asyncHandler(async (req, res) => {
    const { name, address1, address2, city, state, zipcode } = req.body;

    //const userExists = await User.findOne({ username });

    //if (userExists) {
    //    res.status(400)
    //    throw new Error("User Already Exists");
    //}

    const profile = await Profile.create({
        name, 
        address1, 
        address2, 
        city, 
        state, 
        zipcode,
    });

    if (profile) {
        res.status(201).json({
            _id:profile._id,
            name: profile.name,
            address1: profile.address1,
            address2: profile.address2,
            city: profile.city,
            state: profile.state,
            zipcode: profile.zipcode,
            token: generateToken(profile._id),
        });
    } else {
        res.status(400)
        throw new Error('Error Occured')
    }

});

module.exports = { completeProfile };