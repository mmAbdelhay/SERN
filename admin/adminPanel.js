const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");
const db = require("../database/models");

module.exports = function (app) {
  AdminBro.registerAdapter(AdminBroSequelize);
  const adminBro = new AdminBro({
    databases: [db],
    rootPath: "/admin",
  });

  const router = AdminBroExpress.buildRouter(adminBro);
  app.use(adminBro.options.rootPath, router);
};
