const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Schema } = mongoose;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const GetInputTextType = require("../utils/getInputTextType");
const multer = require("multer");

// //LOGIN
const generateToken = async (key, value) => {
  try {
    const token = await jwt.sign({ [key]: value }, PRIVATE_KEY);
    return token;
  } catch (e) {
    console.log("Error", e);
  }
};

router.post("/login", async (req, res) => {
  try {
    const loginInputField = GetInputTextType(req.body.loginInputText);

    const token = await generateToken(loginInputField, req.body.loginInputText);

    const data = await Users.findOne({
      [loginInputField]: req.body.loginInputText,
    });

    if (data) {
      console.log(data);
      bcrypt.compare(req.body.password, data.password, function(err, result) {
        if (result) {
          res.status(200).json({
            msg: "Logged in successfully.",
            token,
            dbUserId: data._id,
            userName: data.userName,
            fullName: data.fullName,
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

//SIGN UP
const userSchema = new Schema(
  {
    fullName: { type: String, require: true },
    userName: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true },
    pfpImgName: { type: String },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

// pfp upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../client/src/uploads");
  },
  filename: function(req, file, cb) {
    console.log(file);
    console.log(req.body.userName);
    cb(
      null,
      "userName_" + req.body.userName + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

router.post("/signup", upload.single("pfpImgName"), async (req, res, next) => {
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

// SEND USERS LIST TO MESSAGES PAGE
router.get("/users", async (req, res) => {
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

// app.get("/users/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//   } catch (e) {
//     console.log(e);
//   }
// });

module.exports = router;
