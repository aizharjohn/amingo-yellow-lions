const express = require("express");
const router = express.Router();

const UserModel = require("../models/ShareTopic.js");

router.post(
    "/topic", // http:/www.myapp.com/user/register
    (req, res) => {
      const formdata = {
        topic: req.body.topic,
       
      };
    }
)

module.exports = router;