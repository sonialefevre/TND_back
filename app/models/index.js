const Sequelize = require("sequelize");
const sequelize = require("../database");

class Comment extends Sequelize.Model {}

Comment.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    clientname: Sequelize.STRING,
    clientcompany: Sequelize.STRING,
  },
  {
    sequelize,
    tableName: "comment",
  }
);

module.exports = Comment;
