const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  image: {
    type: String // url to image
  },

  hashtags: {
    type: Array
  },

  likes: {
    type: Number,
    default: 0
  },

  Date: {
    type: Date,
    default: Date.now
  }
});

const FeedModel = mongoose.model("feed", FeedSchema);
module.exports = FeedModel;
