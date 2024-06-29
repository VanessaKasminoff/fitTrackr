const express = require("express");
const router = express.Router();
// import { WorkoutExercise } from "../models/workoutexercise.js";
// const { workout } = require("../models/workout");
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

// router.get("/", async (req, res) => {
//   try {
//     const exercises = await WorkoutExercise.findAll();
//     res.json(exercises);
//   } catch (error) {
//     res.status(500).send(error.toString());
//   }
// });

module.exports = router;
