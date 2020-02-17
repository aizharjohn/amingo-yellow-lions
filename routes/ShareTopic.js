const express = require("express");
const router = express.Router();

const TopicModel = require("../models/ShareTopic.js");

router.post(
    "/topic", 
    (req, res) => {
      const formdata = {
        topic: req.body.topic,
       
      };
    }
)

module.exports = router;