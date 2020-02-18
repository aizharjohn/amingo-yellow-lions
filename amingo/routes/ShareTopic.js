const express = require("express");
const router = express.Router();
const TopicModel = require("../models/ShareTopic.js");

router.post(
    "/", 
    (req, res) => {
      const formdata = {
        topic: req.body.topic,
      };

      const theTopicModel = new TopicModel(formdata);
      theTopicModel.save();
      res.send("Topic Saved");

    }
);

module.exports = router;