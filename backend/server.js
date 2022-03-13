//step 1: impotr
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//2. init exp app
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

//3. init db , 
const mongoURI = "mongodb+srv://zkyara:SoftwareDesign@cluster0.jvvyq.mongodb.net/myDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

//4.1 routes

mongoose.connection.once("open", () => {
    console.log("Database Connected!")
})

app.get("/", (req, res) => res.status(200).send("Hello"));

//listen to port  
app.listen(port, () => console.log(`Listening on port: ${port}`));
