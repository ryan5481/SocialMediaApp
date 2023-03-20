// SEND USERS LIST TO MESSAGES PAGE
const getUsersList = async (req, res) => {
  try {
    const data = await Users.find();
    console.log(res);
    if (data) {
      res.json({
        usersList: data,
      });
    }
  } catch (e) {
    console.log("Error:", e);
  }
};

exports.getUsersList = getUsersList;
