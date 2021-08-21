const userAuth = require("../controllers/user/UserController");

module.exports = function (app) {
  app.use("/auth", userAuth);
};
