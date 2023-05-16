const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    // ** id will auto generate
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    //**foreign key: dest_id will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Post;
