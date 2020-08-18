// dependencies
const express = require("express");
const routes = require("./routes/api")
const mongoose = require("mongoose")

// new express app
const app = express();

// define PORT
const PORT = process.env.PORT || 5000;

// serve static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/point-intercept");

// start the server
app.listen(PORT, function () {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});