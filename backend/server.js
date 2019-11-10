const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

var app = express();

var PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection established with the database");
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
