require("dotenv").config();

const cors = require("cors");
const express = require("express");
const DB = require("./database/connection");

const userPort = process.env.USER_PORT || 8080;
const adminPort = process.env.ADMIN_PORT || 8000;

const userApp = express();
const adminApp = express();
userApp.use(cors());
userApp.use(express.json({ limit: "5mb" }));

require("./routes/routes.js")(userApp);
require("./admin/adminPanel.js")(adminApp);

DB.connectToDB();
adminApp.listen(adminPort, () => console.log("Admin dashboard listening on port " + adminPort));
userApp.listen(userPort, () => console.log("Server Up on port " + userPort));
