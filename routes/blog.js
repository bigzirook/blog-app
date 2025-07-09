const express = require("express");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPost } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");

const router = express.Router();

router.post("/createBlog", (req, res) => {});
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/Like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;
