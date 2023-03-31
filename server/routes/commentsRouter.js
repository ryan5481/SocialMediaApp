const { Router } = require("express");
const app = Router();
const commentsController = require("../controllers/commentsController");

app.post("/comments", commentsController.SaveComment);

module.exports = app;
