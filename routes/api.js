const router = require("express").Router();
const Workout = require("../models/workout.js")


router.get("/api/workouts", (req, res) => {
  // get last work out
    Workout.find({})
      // .sort({ date: -1 })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // add new workout
  router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


  
  //add the exercise to the current workout


  // update/add exercise to workout

  

  module.exports = router;


