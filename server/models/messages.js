const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(
  {
    text: String,
    userName: String,
    dbUserId: String,
    fullName: String,
    pfpImgName: String,
    socketID: String,
    dateTime: String,
    members: Array,
  },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;
