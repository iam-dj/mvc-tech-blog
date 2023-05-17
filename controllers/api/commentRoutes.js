

const express = require("express");
const router = express.Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");


  
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
