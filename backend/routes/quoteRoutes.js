const express = require("express");
const { getQuotes } = require("../controllers/quoteControllers");

const router = express.Router();

router.route('/').get(getQuotes);
router.route('/quote').post(createQuote);
//router.route('/:id').get().put().delete();

module.exports = router;