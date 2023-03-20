const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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

module.exports = Users;
