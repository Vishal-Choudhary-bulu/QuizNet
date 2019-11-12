const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

var app = express();

var PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection established with the database");
});

const quizRouter = require("./Routes/Quiz.route");

app.use("/quizes", quizRouter);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
