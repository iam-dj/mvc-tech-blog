const sequelize = require("../config/connection");
const {
  User,
  Post,
  Comment
} = require("../models");
const userData = require("./user-seeds.json");
const postData = require("./post-seeds.json");
const commentData = require("./comment-seeds.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Post.bulkCreate(postData);
    
    await Comment.bulkCreate(commentData);

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedDatabase();
