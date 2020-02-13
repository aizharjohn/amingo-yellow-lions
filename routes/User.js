const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const UserModel = require("../models/User.js");

router.post(
  "/register", // http:/www.myapp.com/user/register
  (req, res) => {
    const formdata = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password, // mypass, for example
      occupation: req.body.occupation
    };

    // use the formdata to create model
    const theUserModel = new UserModel(formdata);

    // Step 1. Generate a salt (random characters)
    // Step 2. Take the user's password
    // Step 3. Pass these values to the hash function
    // Step 4. Overwrite the user's password
    // Step 5. Save to the database

    // Step 1. Generate a salt (random characters)
    bcrypt.genSalt((err, salt) => {
      // step 2. generate the hashed password
      bcrypt.hash(
        formdata.password, // password
        salt, // generated salt
        (err, hashedPassword) => {
          // step 3. replace the password value in the UserModel
          theUserModel.password = hashedPassword;

          // step 4. save to database
          theUserModel.save();
          res.send("User registration complete");
        }
      );
    });
  }
);

router.post(
  "/login", // http:/www.myapp.com/user/login
  (req, res) => {
    const formdata = {
      email: req.body.email,
      password: req.body.password
    };

    // step 1. check to see if email exists
    UserModel.find({ email: formdata.email }).then(isMatch => {
      // step 2. if exists, check password
      if ((isMatch, this.length > 0)) {
        // step 3. compare their password with database
        // step 4. generate JWT - jason web token
        // step 5. send it to the client
        // step 3b
        // step 6. exist
        res.send("Email found");
      }
      // step 2b. if user doesn't exists, exit
      else {
        res.send("Please check email & password");
      }
    });
  }
);

module.exports = router;
