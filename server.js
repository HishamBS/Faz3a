const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3333;
const DB = process.env.DB_CONNECT || "http://localhost:2550/Faz3a";
require("dotenv/config");
mongoose.set("useCreateIndex", true);

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("DB IS CONNECTED");
  }
);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.listen(PORT, () => {
  console.log("server is running");
});
