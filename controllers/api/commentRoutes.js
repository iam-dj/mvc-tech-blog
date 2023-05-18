

const express = require("express");
const router = express.Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/:id", async (req, res) => {
  if (!req.session.logged_in) {
    return res.status(403).json({ msg: "Login before adding a comment!" });
  }

  try {
    const newComment = await Comment.create({
      comment: req.body.comment,
      UserId: req.session.user_id,
      PostId: req.params.id, // Retrieve the postId from the request parameters
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete("/:id", async (req, res) => {
  if (!req.session.logged_in) {
    return res.status(403).json({ msg: "Login before deleting a Post!" });
  }
  try {
    const projectData = await Comment.destroy({
      where: {
        id: req.params.id,
        UserId: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  
  //test route for looking at seeds (we can comment out at any  time)
  router.get("/", (req, res) => {
    Comment.findAll()
      .then((comments) => {
        res.json(comments);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });










module.exports = router;
