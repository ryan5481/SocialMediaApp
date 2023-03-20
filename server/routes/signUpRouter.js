const { Router } = require("express");
const app = Router();
const signUpController = require("../controllers/signUpController");
const uploadMiddleware = require("../middlewares/uploadMiddleware");

app.post("/signup", uploadMiddleware.pfpUpload, signUpController.SignUp);
// app.get("/users", signupController.GetUsersList);

module.exports = app;
