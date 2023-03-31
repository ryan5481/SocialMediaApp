const Feed = require("../models/feed");

//img upload

const CreatePost = async (req, res) => {
  try {
    const postWithImg = {
      ...req.body,
      uploadToPostImageName: req.file.filename,
    };
    const data = await Feed.create(postWithImg);
    // console.log(req.body);
    if (data) {
      res.status(200).json({ msgToDev: "User's post received by the server." });
    }
  } catch (e) {
    console.log(e);
  }
};

// SEND ALL USER'S POSTS LIST TO THE HOME PAGE
const GetFeed = async (req, res) => {
  try {
    const allUsersPosts = await Feed.find();
    // console.log(allUsersPosts);
    if (allUsersPosts) {
      res.json({ allUsersPosts: allUsersPosts });
    }
  } catch (e) {
    console.log(e);
  }
};

const GetFeedById = async (req, res) => {
  // console.log(req.params);
  try {
    userIdsPosts = await Feed.find({ dbUserId: req.params.dbUserId });
    console.log(userIdsPosts);
    if (userIdsPosts) {
      res.json(userIdsPosts);
    } else {
      res.json({
        msg: "Error fetching data",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const DeletePost = async (req, res) => {
  console.log(req.params);
  try {
    const data = await Feed.findByIdAndRemove(req.params.postId);
    if (data) {
      res.json({
        msg: "Post deleted successfully.",
      });
    } else {
      res.json({
        msg: "Error. Didn't receive data from DB.",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.CreatePost = CreatePost;
exports.GetFeed = GetFeed;
exports.GetFeedById = GetFeedById;
exports.DeletePost = DeletePost;
