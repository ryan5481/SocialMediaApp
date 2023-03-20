const { Router } = require("express");
const app = Router();
const feedController = require("../controllers/feedController");
const uploadMiddleware = require("../middlewares/uploadMiddleware");

app.post("/feed", uploadMiddleware.feedImageUpload, feedController.CreatePost);
app.get("/feed", feedController.GetFeed);
app.delete("/feed/id", feedController.DeletePost);

module.exports = app;
