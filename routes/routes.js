const userController = require("../controllers/user/UserController");

module.exports = function (app) {
  app.use("/auth", userController);
};
