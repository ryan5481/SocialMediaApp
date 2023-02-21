const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.JWT_PRIVATE_KEY;

app.use(cors());
app.use(express.json());
const port = 8000;

app.get("/", (req, res) => {
  res.send("Initial setup");
});

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

const userSchema = new Schema({
  fullname: { type: String },
  userName: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  password: { type: String },
  confirmApssword: { type: String },
});

const Users = mongoose.model("Users", userSchema);

app.post("/signup", async (req, res) => {
  try {
    const data = await Users.create(req.body);
    if (data) {
      res.json({ msg: "Signup successful!" });
    } else {
      res.json({ msg: "Signup failed!" });
    }
  } catch (e) {
    console.log("Error:" + e);
  }
});

app.post("/login", async (req, res) => {
  jwt.sign({ name: "Ryan" }, secretKey, function (err, token) {
    res.json({
      msg: "Token generated!",
      token: token,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
