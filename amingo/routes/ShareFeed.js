const express = require("express");
const router = express.Router();

const FeedModel = require("../models/ShareFeed.js");

router.post(
  "/", // http:/www.myapp.com/feed/create
  (req, res) => {
    const formdata = {
      username: req.body.username,
      topic: req.body.topic,
      text: req.body.text,
      image: req.body.image,
      hashtags: req.body.hashtags
    };

    // use the formdata to create model
    const theFeedModel = new FeedModel(formdata);

    theFeedModel.save();
    res.send("Feed is created");
  }
);

router.get("/", (req, res) => {
  FeedModel.find().then(results => {
    res.json({
      msg: "here is your feed",
      results: results
    });
  });
});
module.exports = router;
