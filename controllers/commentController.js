const Post = require("../models/Post");
const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    const comment = new Comment({
      post,
      user,
      body,
    });
    const saveComment = await comment.save();
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: saveComment._id },
      },
      { new: true }
    )
      .populate("comments")
      .populate("likes")
      .exec();

    res.json({ post: updatedPost });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Error while createing comment" });
  }
};
