const { Router } = require("express");
const app = Router();
const feedController = require("../controllers/feedController");
const uploadMiddleware = require("../middlewares/uploadMiddleware");

app.post("/feed", uploadMiddleware.feedImageUpload, feedController.CreatePost);
app.get("/feed", feedController.GetFeed);
app.delete("/feed/:postId", feedController.DeletePost);
app.get("/feed/:dbUserId", feedController.GetFeedById);

module.exports = app;
