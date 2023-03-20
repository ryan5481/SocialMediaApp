const multer = require("multer");

const pfpStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../client/src/uploads/profilePictures");
  },
  filename: function(req, file, cb) {
    // console.log(file);
    // console.log(req.body.userName);
    cb(
      null,
      "pfp_userName_" + req.body.userName + "." + file.mimetype.split("/")[1]
    );
  },
});

const pfpUpload = multer({ storage: pfpStorage }).single("pfpImgName");

const feedImageStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../client/src/uploads/usersPosts");
  },
  filename: function(req, file, cb) {
    console.log(req.body);
    cb(
      null,
      "post_userName_" +
        req.body.userName +
        "_" +
        Math.ceil(Math.random() * 1e9) +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const feedImageUpload = multer({ storage: feedImageStorage }).single(
  "uploadToPostImageName"
);

exports.pfpUpload = pfpUpload;
exports.feedImageUpload = feedImageUpload;
