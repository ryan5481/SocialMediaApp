const { Router } = require("express");
const app = Router();
const messagesController = require("../controllers/messagesController");

app.post("/messages", messagesController.SendMessage);

module.exports = app;
