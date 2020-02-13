// 1. Import all the necessary npm modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// 2. Import routes
const UserRoutes = require("./routes/User.js");
const FeedRoutes = require("./routes/Feed.js");
// const UserRoutes = require("./models/User");

// 3. Configure express to parse BODY
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 4. Connect to our database
const dbURL =
  "mongodb+srv://admin:admin@cluster0-bibdm.mongodb.net/test?retryWrites=true&w=majority"; // your db url
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Sorry, not this tim
    console.log("DB is connected");
  })
  .catch(e => {
    console.log("no response from mongoose", e);
  });

/*
 * 5. Routes for our web app server
 */

app.use(
  // this is where to access the routes
  "/user", // http://www.myapp.com/user/
  UserRoutes // routes/User.js
);

app.use(
  // this is where to access the routes
  "/feed", // http://www.myapp.com/feed/create
  FeedRoutes // routes/User.js
);

app.get(
  "/", // http://www.example.com/
  (req, res) => {
    res.send("<h1 style='color:blue'>Welcome Home</h1>");
  }
);

app.get("*", (req, res) => {
  res.send("<h1 style='color:black'>404</h1>");
});

// Listen to the port
app.listen(
  3010, // connect to this port
  () => {
    console.log("you are connected");
  } // do this when you're connected
);
