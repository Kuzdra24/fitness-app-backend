const Workout = require("../db/models/workout");

//POST Create Workout
const saveWorkout = async (req, res) => {
  const name = req.body.name;
  const target = req.body.target;
  const exercises = req.body.exercises;
  const newWorkout = new Workout({ name, target, exercises });

  try {
    await newWorkout.save().then(() => {
      console.log(`Saved the workout => ${JSON.stringify(newWorkout)}`);
    });
  } catch (err) {
    return res.status(422).json({ message: err.message });
  }

  res.status(201).json(newWorkout);
};

//GET Get all Workouts
const getAllWorkout = async (req, res) => {
  const workouts = await Workout.find({});
  res.status(200).json(workouts);
};

//PUT Adding exercise into priticular workout
const addExercise = async (req, res) => {
  const id = req.params.id;
  const newExc = req.body.exercise;

  const workout = await Workout.findOne({ _id: id });
  workout.exercises.push(newExc);
  await workout.save();

  console.log(`added workout ${JSON.stringify(newExc)}`);
  res.status(201).json(workout);
};
//PUT delete exercise from priticular workout
const deleteExercise = async (req, res) => {
  const id = req.params.id;
  const choosedName = req.body.name;
  
  const workout = await Workout.findOne({ _id: id });
  workout.exercises.filter(({ name }) => name !== choosedName);
  
  await workout.save();
  res.status(201).json(workout);
};

//DELETE delete entire workout by ID
const deleteWorkout = async (req, res) => {
  const id = req.params.id;
  await Workout.deleteOne({ _id: id });
  res.status(204).send("usuniete bro");
};

module.exports = {
  saveWorkout,
  getAllWorkout,
  addExercise,
  deleteWorkout,
  deleteExercise,
};
