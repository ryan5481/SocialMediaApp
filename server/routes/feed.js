const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const multer = require("multer");

//RECEIVE USER'S POSTS FROM THE FRONTEND AND STORE IN THE DB

const feedSchema = new mongoose.Schema(
  {
    dbUserId: { type: String },
    userName: { type: String },
    fullName: { type: String },
    inputPostText: { type: String },
    members: { type: Array },
    postImgName: { type: String },
  },
  { timestamps: true }
);

const Feed = mongoose.model("Feed", feedSchema);

//img upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../client/src/uploads/usersPosts");
  },
  filename: function(req, file, cb) {
    console.log(req);
    cb(
      null,
      "post_userName_" + req.body.userName + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

router.post("/feed", upload.single("postImgName"), async (req, res, next) => {
  //   console.log(req);
  try {
    const data = await Feed.create(req.body);
    // console.log(req.body);
    if (data) {
      res.status(200).json({ msgToDev: "User's post received by the server." });
    }
  } catch (e) {
    console.log(e);
  }
});

// SEND ALL USER'S POSTS LIST TO THE HOME PAGE
router.get("/feed", async (req, res) => {
  try {
    const allUsersPosts = await Feed.find();
    // console.log(allUsersPosts);
    if (allUsersPosts) {
      res.json({ allUsersPosts: allUsersPosts });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
