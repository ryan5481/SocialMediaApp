const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Schema } = mongoose;

//RECEIVE USER'S POSTS FROM THE FRONTEND AND STORE IN THE DB

const feedSchema = new mongoose.Schema(
  {
    dbUserId: String,
    userName: String,
    fullName: String,
    inputPostText: String,
    members: Array,
    postImgName: String,
  },
  { timestamps: true }
);

const Feed = mongoose.model("Feed", feedSchema);

router.post("/feed", async (req, res) => {
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
    console.log(allUsersPosts);
    if (allUsersPosts) {
      res.json({ allUsersPosts: allUsersPosts });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
