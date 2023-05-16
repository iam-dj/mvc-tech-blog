const express = require("express");
const router = express.Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post("/", async (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const userData = await User.create(newUser);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }

});

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
  
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  
  



  module.exports = router;
