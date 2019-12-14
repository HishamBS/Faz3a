const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3333;
const DB = process.env.DB_CONNECT || "mongodb://localhost:27017/Faz3a";
require("dotenv/config");
mongoose.set("useCreateIndex", true);

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("DB IS CONNECTED");
  }
);

//MiddleWares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));



//Routes
server.use("/api/v1/users", require("./routes/users.routes"));
server.use("/api/v1/items", require("./routes/items.routes"));
server.use("/admin", require("./routes/admin.routes"));


server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
