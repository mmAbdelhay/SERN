const router = require("express").Router();
const validators = require("./validators");
const userRepository = require("../../repositories/userRepository");
const hashComparer = require("../../services/hash");
const token = require("../../services/token");

router.post("/login", async (req, res) => {
  const user = await userRepository.FindByEmail(req.body);
  if (user) {
    (await hashComparer.hashCompare(req.body.password, user.password))
      ? res.status(200).json({
          message: "user Logged in successfully",
          token: token.generateToken(user.id, "User"),
        })
      : res.status(400).json({ message: "user credentials error" });
  } else {
    res.status(400).json({ message: "user credentials error" });
  }
});

router.post("/register", async (req, res) => {
  const validation_errors = validators(req.body);
  if (Object.keys(validation_errors).length === 0) {
    const user = await userRepository.FindByEmail(req.body);
    if (user) {
      res.status(200).json({ message: "Email registered before" });
    } else {
      (await userRepository.InsertUser(req.body))
        ? res.status(200).json({ message: "Registered Successfully" })
        : res.status(500).json({ message: "Database Error Occurred" });
    }
  } else {
    res.status(400).json(validation_errors);
  }
});

module.exports = router;
