const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    createdAt: "created_at",
  },
});

module.exports = sequelize;
