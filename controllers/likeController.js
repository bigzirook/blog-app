const Like = require("../models/Like");
const Post = require("../models/Post");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: savedLike._id },
      },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({ post: updatedPost });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Error while likeing post",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    const deletedLike = await Like.findOneAndDelete({ post, _id: like });
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deletedLike._id },
      },
      { new: true }
    );
    res.json({ post: updatedPost });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Error while unlikeing post",
    });
  }
};
