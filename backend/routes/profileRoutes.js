const express = require("express")
const { completeProfile } = require('../controllers/profileControllers')
const router = express.Router();

router.route('/profile').post(completeProfile)


//create profile 
profilesRoute = require("../controllers/profileControllers");

module.exports = router;