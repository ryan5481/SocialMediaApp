const { Router } = require("express");
const app = Router();
const messagesController = require("../controllers/messagesController");
// const SendMessageToFrontEnd = require("../controllers/messagesController");

app.post("/messages", messagesController.SaveMessage);

// app.get("/messages", messagesController.SendMessageToFrontEnd);

module.exports = app;
