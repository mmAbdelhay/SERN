const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign(
    {
      _id: id,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: "6h" }
  );
};

module.exports = { generateToken: generateToken };
