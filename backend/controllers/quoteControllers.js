const asyncHandler = require('express-async-handler');
const Quote = require('../models/quoteModel');

const getQuotes = asyncHandler(async (req, res) => {
    const quotes = await Quote.find();
    res.json(quotes);
});

const createQuote = asyncHandler(async (req, res) => {
    const { gallons, address, deliveryDate, suggestedPrice } = req.body;

    if (!gallons || !address || !deliveryDate || !suggestedPrice) {
        res.status(400);
        throw new Error("Please fill all the fields");
    } else {
        const quote = new Quote({user: req.user._id, gallons, address, deliveryDate, suggestedPrice });

        const createdQuote = await quote.save();

        res.status(201).json(createdQuote);
    }
});

module.exports = { getQuotes };