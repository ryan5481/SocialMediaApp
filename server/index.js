const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const feedRouter = require("./routes/feed");
const messagesRouter = require("./routes/messages");
const usersRouter = require("./routes/users");

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
