const express = require("express")
const { registerUser, authUser } = require('../controllers/userControllers')
const router = express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(authUser)

//create users 
usersRoute = require("../controllers/userControllers");

//router.get("/", usersRoute.usersController);

module.exports = router;