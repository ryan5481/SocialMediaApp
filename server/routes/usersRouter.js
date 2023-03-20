const { Router } = require("express");
const app = Router();
const usersController = require("../controllers/usersController");

app.get("/users", usersController.getUsersList);

module.exports = app;
