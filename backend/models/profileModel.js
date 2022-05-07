const mongoose = require('mongoose');

const profileSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address1: {
            type: String,
            required: true,
        },
        address2: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipcode: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;