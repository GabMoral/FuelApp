const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema(
    {
        gallons: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        deliveryDate: {
            type: Date,
            required: true,
        },
        suggestedPrice: {
            type: Number,
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

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;