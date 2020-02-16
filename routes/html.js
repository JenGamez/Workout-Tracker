// const router = require("express").Router();
// const Workout = require("../models/workout.js")
var path = require("path");
const router = require("express").Router();
// const Workout = require("../models/workout.js")




router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
  console.log("stats");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  
  });

  // app.get("/exercise?", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/exercise.html"));
  //   });

  router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
    });  

    module.exports = router;



  

  
