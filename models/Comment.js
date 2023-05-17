const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    // ** id will auto generate
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      // validate: {
      //   isAlpha: true,
      // },
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

  },
  {
    sequelize,
  }
);

module.exports = Comment;
