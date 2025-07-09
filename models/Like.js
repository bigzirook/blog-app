const mongooose = require("mongoose");

const likeSchema = new mongooose.Schema({
  post: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongooose.model("Like", likeSchema);
