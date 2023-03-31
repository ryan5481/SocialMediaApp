// SEND USERS LIST TO MESSAGES PAGE
const Users = require("../models/users");

const getUsersList = async (req, res) => {
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
};

exports.getUsersList = getUsersList;
