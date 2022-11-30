const sequelize = require("../database");
const { Model, Sequelize } = require("sequelize");

class Comment extends Model {}
Comment.init(
  {
    clientname: Sequelize.STRING,
    clientcompany: Sequelize.STRING,
    comment: Sequelize.STRING,
  },
  {
    sequelize,
    tableName: "comment",
    timestamps: false,
  }
);

module.exports = Comment;
