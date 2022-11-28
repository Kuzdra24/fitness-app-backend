const express = require("express");
const router = express.Router();
const workoutAction = require("../controllers/workouts");

router.get("/workouts", workoutAction.getAllWorkout);

// router.get("/workouts/:id", getWorkout);

//Adding new exercisie into priticular workout 
router.put("/workouts/:id", workoutAction.updateWorkout)

router.post("/workouts", workoutAction.saveWorkout);

// router.delete("/workouts", deleteWorkout);

module.exports = router;
