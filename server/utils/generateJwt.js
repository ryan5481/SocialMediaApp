const jwt = require("jsonwebtoken");
PRIVATE_KEY =
  process.env.JWT_PRIVATE_KEY ||
  "be466be6edf74702cd7b1f9fef627bd93af29c4f0ac215e1348925a928abf52b795c3d8328198f19552081f943fc3009c45a";

const GenerateToken = async (key, value) => {
  try {
    const token = await jwt.sign({ [key]: value }, PRIVATE_KEY);
    return token;
  } catch (e) {
    console.log("Error", e);
  }
};

module.exports = GenerateToken;
