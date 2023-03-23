const express = require("express");
const cors = require("cors");
const app = express();

const http = require("http");
const server = http.createServer(app);

// assign a server
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    // pingTimeout: 60000, //socket turns off after 60 seconds of user inactiveness
    origin: "http://localhost:3000" || "*",
  },
});

const loginRouter = require("./routes/loginRouter");
const signUpRouter = require("./routes/signUpRouter");
const feedRouter = require("./routes/feedRouter");
const messagesRouter = require("./routes/messagesRouter");
const resetPwdRouter = require("./routes/resetPwdRouter");
const connectDb = require("./db/connectDb");

app.use(cors());
app.use(express.json());

app.use("/", feedRouter);
app.use("/", messagesRouter);
app.use("/", loginRouter);
app.use("/", signUpRouter);
app.use("/", resetPwdRouter);

const port = 9000;

connectDb();

io.on("connection", (socket) => {
  //receive user's data from the front end˚
  socket.on("messages", (usersData) => {
    // io.emit("messages", usersData);
    socket.join(usersData._id);
    console.log(usersData._id);
    socket.emit("Connected!");
  });
  console.log(`A user ${socket.id} is connected.`);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
