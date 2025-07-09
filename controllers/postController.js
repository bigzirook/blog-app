const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();
    res.json({
      post: savedPost,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Error while creating post",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const getAllPost = await Post.find({})
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({
      post: getAllPost,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Error while fetching post",
    });
  }
};
