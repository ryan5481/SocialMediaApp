const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// pfp upload

const SignUp = async (req, res) => {
  console.log(req.body.password);
  try {
    bcrypt.hash(req.body.password, saltRounds).then(async function(hash) {
      req.body.password = hash;

      const reqWithPfpImg = { ...req.body, pfpImgName: req.file.filename };
      const data = await Users.create(reqWithPfpImg);
      if (data) {
        res.json({ msg: "Signup successful!" });
      } else {
        res.json({ msg: "Signup failed!" });
      }
    });
  } catch (e) {
    console.log("Error:" + e);
  }
};

// // SEND USERS LIST TO MESSAGES PAGE
// const GetUsersList = async (req, res) => {
//   try {
//     const usersList = await Users.find();
//     if (usersList) {
//       res.json({
//         usersList: usersList,
//       });
//     }
//   } catch (e) {
//     console.log("Error:", e);
//   }
// };

// app.get("/users/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//   } catch (e) {
//     console.log(e);
//   }
// });

exports.SignUp = SignUp;
