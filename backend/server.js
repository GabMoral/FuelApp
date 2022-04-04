//step 1: impotr
const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
//import cors from "cors";
//import mongoose from "mongoose";

//2. init exp app
const app = express();
dotenv.config();
connectDB();

const port = process.env.PORT || 9000;

//app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello"));



//listen to port  
app.listen(port, () => console.log(`Listening on port: ${port}`));
