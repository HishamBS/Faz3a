const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const PORT = process.env.PORT || 3333;
const DB = process.env.DB_CONNECT;

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
server.use(express.static(path.join(__dirname, "build")));

//Routes
server.use("/api/v1/users", require("./routes/users.routes"));
server.use("/api/v1/items", require("./routes/items.routes"));
server.use("/api/v1/users/chats", require("./routes/messages.routes"));
server.use("/admin", require("./routes/admin.routes"));
server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
