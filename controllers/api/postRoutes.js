

const express = require("express");
const router = express.Router();
const { Post, User, Comment } = require("../../models");
// const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  if (!req.session.logged_in) {
    return res.status(403).json({ msg: "Login before adding a post!" });
  }
  try {
    const newPost = await Post.create({
      // ...req.body,
      ...req.body,
      //add image url here?
      UserId: req.session.user_id,
      // UserId: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});



  
  //test route for looking at seeds (we can comment out at any  time)
  router.get("/", (req, res) => {
    Post.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });



  // router.get("/", async (req, res) => {
  //   try {
  //     const posts = await Post.findAll({
  //       include: [User, Comment],
  //     });
  
  //     const logged_in = req.session.logged_in || false;

  //     console.log(posts)
      
  //     res.render("home", { posts, logged_in });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // });




  router.get("/:id/", (req,res)=>{
    Post.findOne({where:{id: req.params.id}}).then(data=>{
      res.json(data);
    })
  })

  router.delete("/:id", async (req, res) => {
    if (!req.session.logged_in) {
      return res.status(403).json({ msg: "Login before deleting a Post!" });
    }
    try {
      const projectData = await Post.destroy({
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



module.exports = router;
