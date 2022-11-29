const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workouts");

router.get("/workouts", workoutController.getAllWorkout);

// router.get("/workouts/:id", getWorkout);

//Adding new exercisie into priticular workout
router.put("/workouts/add/:id", workoutController.addExercise);
//Delete priticular exercises
router.put('/workouts/delete/:id', workoutController.deleteExercise);

router.post("/workouts", workoutController.saveWorkout);

router.delete("/workouts/:id", workoutController.deleteWorkout);

module.exports = router;
