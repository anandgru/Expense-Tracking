const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "mysql123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
