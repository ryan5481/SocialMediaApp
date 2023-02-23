const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const secretKey = process.env.JWT_PRIVATE_KEY;
require("dotenv").config();

app.use(cors());
app.use(express.json());
const port = 8000;

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
  // console.log(req.body, req.query, req.params);
  try {
    bcrypt.hash(req.body.password, saltRounds).then(async function (hash) {
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

app.post("/login", async (req, res) => {
  const data = await Users.findOne({ phoneNumber: req.body.phoneNumber });
  if (data) {
    bcrypt.compare(req.body.password, data.password, function (err, result) {
      if (result) {
        res.json({
          msg: "Logged in successfully.",
        });
      } else {
        res.json({
          msg: "Incorrect password.",
        });
      }
    });
  } else {
    res.json({
      msg: "Incorrect credentials.",
    });
  }
});
//
// });
// jwt.sign(
//   { phoneNumber: req.body.phoneNumber },
//   secretKey,
//   function (err, token) {
//     res.json({
//       msg: "Token generated!",
//       token: token,
//     });
//   }
// );

const getUserData = async (req, res) => {
  let usersData;
  usersData = await Users.find();
  // console.log(usersData);
};

getUserData();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
