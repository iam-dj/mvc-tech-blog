const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

Post.belongsTo(User, {
  onDelete: "CASCADE",
});
User.hasMany(Post, {
  onDelete: "CASCADE",
});
Comment.belongsTo(Post, {
  onDelete: "CASCADE",
});
Post.hasMany(Comment, {
  onDelete: "CASCADE",
});
User.hasMany(Comment, {
  onDelete: "CASCADE",
});


module.exports = {
    User: User,
    Post: Post,
    Comment: Comment,
  };