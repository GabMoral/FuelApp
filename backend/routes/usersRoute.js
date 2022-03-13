import express from "express";
router = express.Router();

//create users 
usersRoute = require("../controllers/usersControllers");

router.get("/", usersRoute.usersController);

module.exports = router;
