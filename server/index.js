const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const GetInputTextType = require("./utils/getInputTextType");
const multer = require("multer");
require("dotenv").config();

const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

app.use(cors());
app.use(express.json());
const port = 9000;

// CONNECT TO DATABASE
const connectDb = async () => {
  try {
    const data = await mongoose.connect(
      "mongodb://localhost:27017/socialmediaapp"
    );
    if (data) console.log("Connected to Mongo DB!");
  } catch (err) {
    console.log("DB connection error", err);
  }
};

connectDb();

// //LOGIN
const generateToken = async (key, value) => {
  try {
    const token = await jwt.sign({ [key]: value }, PRIVATE_KEY);
    return token;
  } catch (e) {
    console.log("Error", e);
  }
};

app.post("/login", async (req, res) => {
  try {
    const loginInputField = GetInputTextType(req.body.loginInputText);

    const token = await generateToken(loginInputField, req.body.loginInputText);

    const data = await Users.findOne({
      [loginInputField]: req.body.loginInputText,
    });

    if (data) {
      console.log(data);
      bcrypt.compare(req.body.password, data.password, function(err, result) {
        if (result) {
          res.status(200).json({
            msg: "Logged in successfully.",
            token,
            dbUserId: data._id,
            userName: data.userName,
            fullName: data.fullName,
          });
        } else {
          res.status(401).json({
            msg: "Incorrect password.",
          });
        }
      });
      // console.log(token);
    } else {
      res.status(403).json({
        msg: "Incorrect credentials.",
      });
    }
  } catch (e) {
    console.log("error:", e);
  }
});

//SIGN UP
const userSchema = new Schema(
  {
    fullName: { type: String, require: true },
    userName: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true },
    pfpImgName: { type: String },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

// PFP upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../client/src/uploads");
  },
  filename: function(req, file, cb) {
    // console.log(file);
    // console.log(req.body.userName);
    cb(
      null,
      "userName_" + req.body.userName + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

app.post("/signup", upload.single("pfpImgName"), async (req, res, next) => {
  // console.log(req.body, req.query, req.params);
  try {
    bcrypt.hash(req.body.password, saltRounds).then(async function(hash) {
      req.body.password = hash;
      const data = await Users.create(req.body);
      if (data) {
        res.json({ msg: "Signup successful!" });
      } else {
        res.json({ msg: "Signup failed!" });
      }
    });
  } catch (e) {
    console.log("Error:" + e);
  }
});

// RECEIVE MESSAGES FROM THE FRONTEND
const messagesSchema = new mongoose.Schema(
  { dbUserId: String, message: String, members: Array },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", messagesSchema);

app.post("/messages", async (req, res) => {
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

//RECEIVE USER'S POSTS FROM THE FRONTEND AND STORE IN THE DB

const feedSchema = new mongoose.Schema(
  {
    dbUserId: String,
    userName: String,
    fullName: String,
    inputPostText: String,
    members: Array,
  },
  { timestamps: true }
);

const Feed = mongoose.model("Feed", feedSchema);

app.post("/makeapost", async (req, res) => {
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
app.get("/feed", async (req, res) => {
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

// SEND USERS LIST TO MESSAGES PAGE
app.get("/users", async (req, res) => {
  try {
    const usersList = await Users.find();
    if (usersList) {
      res.json({
        usersList: usersList,
      });
    }
  } catch (e) {
    console.log("Error:", e);
  }
});

// app.get("/users/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//   } catch (e) {
//     console.log(e);
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
