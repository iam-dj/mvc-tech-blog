const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User, {
  onDelete: "CASCADE",
});

User.hasMany(Post, {
  onDelete: "CASCADE",
});



module.exports = {
    User: User,
    Post: Post,
  };