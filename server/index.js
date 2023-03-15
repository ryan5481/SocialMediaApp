const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000" || "*",
  },
});

const feedRouter = require("./routes/feed");
const messagesRouter = require("./routes/messages");
const usersRouter = require("./routes/users");
const connectDb = require("./db/connectDb");

app.use(cors());
app.use(express.json());

app.use("/", feedRouter);
app.use("/", messagesRouter);
app.use("/", usersRouter);

const port = 9000;

connectDb();

io.on("connection", (socket) => {
  socket.on("messages", (req) => {
    console.log(req);
  });
  console.log("A user is connected.", socket.id);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
