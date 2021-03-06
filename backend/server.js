//step 1: impotr
const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require('cors');
//import mongoose from "mongoose";

//2. init exp app
const app = express();
dotenv.config();
connectDB();

const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running..");
});


app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/quotes", quoteRoutes);


app.use(notFound)
app.use(errorHandler)

//listen to port  
app.listen(port, () => console.log(`Listening on port: ${port}`));
