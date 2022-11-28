const mongoose = require("mongoose");

const Workout = mongoose.model("Workout", {
  name: String,
  target: String,
  exercises: Array,
});

module.exports = Workout;