const Workout = require("../db/models/workout");

const saveWorkout = async (req, res) => {
  const name = req.body.name;
  const target = req.body.target;
  const exercises = req.body.exercises;
  const newWorkout = new Workout({ name, target, exercises });

  await newWorkout.save().then(() => {
    console.log("Saved the workout");
  });

  res.send(`Trening: ${name}  -  target: ${target}`);
};

const getAllWorkout = async (req, res) => {
  const workouts = await Workout.find({});
  res.status(200).json(workouts);
};

const updateWorkout = async (req, res) => {
  const id = req.params.id;
  const newExc = req.body.exercise;

  const workout = await Workout.findOne({ _id: id });
  workout.exercises.push(newExc);
  await workout.save();

  console.log('added workout')
  res.status(201).json(workout);
};

module.exports = {
  saveWorkout,
  getAllWorkout,
  updateWorkout,
};
