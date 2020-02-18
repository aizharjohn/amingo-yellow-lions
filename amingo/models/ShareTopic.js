const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const TopicSchema = new Schema({
  topic: {
    type: Array,
    required: true
  }
});

const TopicModel = mongoose.model("topic", TopicSchema);
module.exports = TopicModel;
