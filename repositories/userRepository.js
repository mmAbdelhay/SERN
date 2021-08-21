const db = require("../database/models/index");
const hash = require("../services/hash");
const logger = require("../services/logger");

module.exports.InsertUser = async (user) => {
  try {
    await db.User.create({
      name: user.name,
      email: user.email,
      password: await hash.hashPassword(user.password),
    });
    return true;
  } catch (err) {
    logger.error("Database Insertion failed err: ", err);
    return false;
  }
};

module.exports.FindByEmail = async (user) => {
  try {
    const User_retrieved = await db.User.findOne({
      where: {
        email: user.email,
      },
    });
    return User_retrieved ? User_retrieved : false;
  } catch (err) {
    logger.error("Database Selection failed err: ", err);
    return false;
  }
};
