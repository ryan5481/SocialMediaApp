const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    dbUserId: { type: String },
    userName: { type: String },
    fullName: { type: String },
    inputPostText: { type: String },
    members: { type: Array },
    pfpImgName: { type: String },
    uploadToPostImageName: { type: String },
  },
  { timestamps: true }
);

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
