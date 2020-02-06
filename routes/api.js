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
//   router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// add new workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create({
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                weight: req.body.weight,
                reps: req.body.reps,
                sets: req.body.sets,
                distance: req.body.distance
  })
  .then(function(dbWorkout) {
    res.json(dbWorkout);
  });
});


  // View (GET) the combined eight of multiple exercise on the "stats" page
  // Ask Chris about getWorkoutsInRange() on api.js


  router.get("/api/workouts", (req, res) => {
    console.log("Getting exercise info")
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});



  //add the exercise to the previous workout - PUT- don't need to do this, but want to if have time
// add new exercises to a new workout plan

  

  module.exports = router;


