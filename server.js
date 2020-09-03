// dependencies
const express = require("express");
const routes = require("./routes/api")
const mongoose = require("mongoose")
const path = require('path');
const passport = require("passport");

const users = require("./routes/api/users");


// configure dotenv
require('dotenv').config();

// new express app
const app = express();

// define PORT
const PORT = process.env.PORT || 5000;

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//User Auth
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Add routes, both API and view
app.use(routes);

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));
}

// Connect to the Mongo DB
mongoose.connect( "mongodb://localhost/point-intercept");
// process.env.MONGODB_URI||


// start the server
app.listen(PORT, function () {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});