const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
const http = require("http");
require("dotenv").config();
const server = http.createServer(app);

const { Server } = require("socket.io");
// assign a server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    // pingTimeout: 60000, //socket turns off after 60 seconds of user inactiveness
  },
});

// create a socket connection
let users = [];

io.on("connection", (socket) => {
  console.log(`🟢 ${socket.id} connected!`);

  socket.on("userLoggedIn", (data) => {
    users.push(data);
    console.log(users);
  });

  socket.on("message", (data) => {
    console.log(data);
    io.emit("messageResponse", data);
  });

  socket.on("disconnect", () => {
    console.log(`🔴 ${socket.id} disconnected!`);
  });
});

const loginRouter = require("./routes/loginRouter");
const signUpRouter = require("./routes/signUpRouter");
const feedRouter = require("./routes/feedRouter");
const messagesRouter = require("./routes/messagesRouter");
const resetPwdRouter = require("./routes/resetPwdRouter");
const usersRouter = require("./routes/usersRouter");
const connectDb = require("./db/connectDb");

app.use(cors());
app.use(express.json());
app.use("/", feedRouter);
app.use("/", messagesRouter);
app.use("/", loginRouter);
app.use("/", signUpRouter);
app.use("/", resetPwdRouter);
app.use("/", usersRouter);

connectDb();

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
