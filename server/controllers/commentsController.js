const Comments = require("../models/comments");

const SaveComment = async (req, res) => {
  const data = await Comments.create(req.body.values);
  if (data) {
    console.log(data);
  }
};

exports.SaveComment = SaveComment;
