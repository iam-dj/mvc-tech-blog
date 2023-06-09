const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
