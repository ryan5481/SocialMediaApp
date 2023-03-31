const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    dbUserId: { type: String },
    dbPostId: { type: String },
    commentText: { type: String },
    dateTime: { type: String },
  },
  { timestamps: true }
);

const Feed = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
