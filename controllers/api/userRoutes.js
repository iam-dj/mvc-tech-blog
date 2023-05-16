const express = require("express");
const router = express.Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/login", (req, res) => {
    // Find the user who matches the posted e-mail address
    User.findOne({ where: { username: req.body.username } })
      .then((userData) => {
        if (!userData) {
          res.status(400).json({ message: "Invalid username/password" });
          return;
        }
  
        // Verify the posted password with the password store in the database
        const validPassword = userData.checkPassword(req.body.password);
  
        if (!validPassword) {
          res.status(400).json({ message: "Invalid username/password" });
          return;
        }
  
        // Create session variables based on the logged in user
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
  
          res.json({ user: userData, message: "You are now logged in!" });
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        logged = false;
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  //test route for looking at seeds (we can comment out at any  time)
  router.get("/", (req, res) => {
    User.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });

  router.post("/delete-account", withAuth, async (req, res) => {
    await User.destroy({
      where: {
        id: req.session.user_id,
      }
    })
    res.redirect("/?account_deleted=true");
  })
  
  router.delete("/:id", async (req, res) => {
    if (!req.session.logged_in) {
      return res.status(403).json({ msg: "Login before deleting a User!" });
    }
    try {
      const projectData = await User.destroy({
        where: {
          id: req.params.id,
          UserId: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;
