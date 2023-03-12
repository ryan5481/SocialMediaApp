const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

require("dotenv").config();

const feedRouter = require("./routes/feed");
const messagesRouter = require("./routes/messages");
const usersRouter = require("./routes/users");

const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

app.use(cors());
app.use(express.json());
app.use("/", feedRouter);
app.use("/", messagesRouter);
app.use("/", usersRouter);

const port = 9000;

// CONNECT TO DATABASE
const connectDb = async () => {
  try {
    const data = await mongoose.connect(
      "mongodb://localhost:27017/socialmediaapp"
    );
    if (data) console.log("Connected to Mongo DB!");
  } catch (err) {
    console.log("DB connection error", err);
  }
};

connectDb();

//RECEIVE USER'S POSTS FROM THE FRONTEND AND STORE IN THE DB

// SEND ALL USER'S POSTS LIST TO THE HOME PAGE

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
