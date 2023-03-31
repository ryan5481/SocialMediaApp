const bcrypt = require("bcrypt");
const Users = require("../models/users");
const generateToken = require("../utils/generateJwt");
const GetInputTextType = require("../utils/getInputTextType");
require("dotenv").config();

const Login = async (req, res) => {
  try {
    const loginInputField = GetInputTextType(req.body.loginInputText);

    const token = await generateToken(loginInputField, req.body.loginInputText);

    const data = await Users.findOne({
      [loginInputField]: req.body.loginInputText,
    });

    if (data) {
      // console.log(data);
      bcrypt.compare(req.body.password, data.password, function(err, result) {
        if (result) {
          res.status(200).json({
            msg: "Logged in successfully.",
            token,
            dbUserId: data._id,
            userName: data.userName,
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            pfpImgName: data.pfpImgName,
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
};

exports.Login = Login;
