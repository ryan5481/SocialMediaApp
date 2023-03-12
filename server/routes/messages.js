const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Schema } = mongoose;

// RECEIVE MESSAGES FROM THE FRONTEND
const messagesSchema = new mongoose.Schema(
  { dbUserId: String, message: String, members: Array },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", messagesSchema);

router.post("/messages", async (req, res) => {
  try {
    const data = await Messages.create(req.body);
    if (data) {
      //console.log(data);
      res.status(200).json({ msgToDev: "Message received by the server." });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
