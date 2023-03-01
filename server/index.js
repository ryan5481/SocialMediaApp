const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const GetInputTextType = require("./utils/getInputTextType");
require("dotenv").config();

const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

app.use(cors());
app.use(express.json());
const port = 9000;

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

const generateToken = async (key, value) => {
  try {
    const token = await jwt.sign({ [key]: value }, PRIVATE_KEY);
    return token;
  } catch (e) {
    console.log("Error", e);
  }
};

app.post("/login", async (req, res) => {
  try {
    const loginInputField = GetInputTextType(req.body.loginInputText);

    const token = await generateToken(loginInputField, req.body.loginInputText);

    const data = await Users.findOne({
      [loginInputField]: req.body.loginInputText,
    });

    if (data) {
      bcrypt.compare(req.body.password, data.password, function(err, result) {
        // console.log(data._id, result);
        if (result) {
          res.status(200).json({
            msg: "Logged in successfully.",
            token,
            dbUserId: data._id,
          });
        } else {
          res.status(401).json({
            msg: "Incorrect password.",
          });
        }
      });
      // console.log(token);
    } else {
      res.status(403).json({
        msg: "Incorrect credentials.",
      });
    }
  } catch (e) {
    console.log("error:", e);
  }
});

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
  // console.log(req.body, req.query, req.params);
  try {
    bcrypt.hash(req.body.password, saltRounds).then(async function(hash) {
      req.body.password = hash;
      const data = await Users.create(req.body);
      if (data) {
        res.json({ msg: "Signup successful!" });
      } else {
        res.json({ msg: "Signup failed!" });
      }
    });
  } catch (e) {
    console.log("Error:" + e);
  }
});

// app.get("/users/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//   } catch (e) {
//     console.log(e);
//   }
// });

// receiveing messages
const messagesSchema = new mongoose.Schema(
  { dbUserId: String, message: String, members: Array },
  { timeStamp: true }
);

const Messages = mongoose.model("Messages", messagesSchema);

app.post("/messages", async (req, res) => {
  try {
    const data = await Messages.create(req.body);
    if (data) {
      res.status(200).json({ msgToDev: "Message received by the server." });
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
});

// sending usersList
app.get("/users", async (req, res) => {
  try {
    const usersList = await Users.find();
    if (usersList) {
      res.json({
        usersList: usersList,
      });
    }
  } catch (e) {
    console.log("Error:", e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
