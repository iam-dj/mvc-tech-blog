const router = require("express").Router();
const {
  User,
  Post,
} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("logohome", {
      logged_in: req.session.logged_in,
      account_deleted: req.query.account_deleted,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("logohome", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      include: [Post],
    });
    const user = dbUserData.get({ plain: true });
    console.log(user);
    const post = user.Posts;
    
    console.log(post);
    
    res.render("profile",{user,post
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



  module.exports = router;
