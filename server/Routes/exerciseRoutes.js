const express = require("express");
const router = express.Router();
const db = require("../models");
const { where } = require("sequelize");
const { workout } = db;

// this is just to test out that the data is showing in a created route

router.get("/", async (req, res) => {
  try {
    console.log("Attempting to fetch exercises...");
    console.log("workout model:", workout);
    const exercises = await workout.findAll();
    console.log("Exercises:", exercises);
    res.json(exercises);
  } catch (error) {
    console.error("Failed to fetch exercises:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch exercises", error: error.message });
  }
});

router.post('/', async (req,res) => {
  const newWorkout = await workout.create(req.body)
  res.json(newWorkout)
  console.log(newWorkout)
})

router.get('/:id', async (req, res) => {
  let workoutId = Number(req.params.id)
  try {
    const findWorkout = await workout.findOne({
      where: {id: workoutId}
    })
    res.json(findWorkout)
  } catch (error) {
    console.error('Could not find workout with id', error)
  }
})

router.delete('/:id', async (req, res) => {
  let workoutId = Number(req.params.id)

  const findWorkout = await workout.findOne({
    where: {id: workoutId}
  });

  if (!findWorkout) {
    res.status(404).json({message: `Could not find workout with id ${workoutId}`})
  } else {
    await findWorkout.destroy()
    res.json(findWorkout)
  }
})

module.exports = router;
