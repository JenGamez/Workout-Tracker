// const router = require("express").Router();
// const Workout = require("../models/workout.js")
var path = require("path");


module.exports = function(app) {

  // NOT WORKING

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/exercisse", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
};


  

  
