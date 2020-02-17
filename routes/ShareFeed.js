const express = require("express");
const router = express.Router();

const FeedModel = require("../models/ShareFeed.js");

router.post(
  "/topics", // http:/www.myapp.com/feed/create
  (req, res) => {
    const formdata = {
      title: req.body.tile,
      description: req.body.description,
      image: req.body.image,
      hashtags: req.body.hashtags
    };

    // use the formdata to create model
    const theFeedModel = new FeedModel(formdata);

    theFeedModel.save();
    res.send("Feed is created");
  }
);

router.get("/topics", (req, res) => {
  FeedModel.find().then(results => {
    res.json({
      msg: "here are your topics",
      results: results
    });
  });
});
module.exports = router;
