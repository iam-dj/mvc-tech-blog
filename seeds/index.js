const sequelize = require("../config/connection");
const {
  User,
  Post
} = require("../models");
const userData = require("./user-seeds.json");
const postData = require("./post-seeds.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Post.bulkCreate(postData);

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedDatabase();
