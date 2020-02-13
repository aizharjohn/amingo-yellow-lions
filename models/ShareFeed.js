const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedSchema = new Schema({
  user: {
    type: Schema.Types.ObjectID,
    ref: 'users'
  },
  topic: {
    type: Schema.Types.ObjectID,
    ref: 'topic'
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: String // URL to the image
  },
  hashtags: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const FeedModel = mongoose.model('feed', FeedSchema);
module.exports = FeedModel;
