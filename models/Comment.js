const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    // ** id will auto generate
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   isAlpha: true,
      // },
    },
    like: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    //**foreign key: dest_id will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Comment;
