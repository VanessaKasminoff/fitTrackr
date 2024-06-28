"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "WorkoutExercises",
      [
        {
          exercise_name: "Push-Ups",
          description:
            "A basic calisthenics exercise that targets the chest, shoulders, and triceps.",
          difficulty_level: "Medium",
          reps: 20,
          time_limit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Plank",
          description:
            "Core strengthening exercise that involves maintaining a position similar to a push-up for the maximum possible time.",
          difficulty_level: "Medium",
          reps: null,
          time_limit: "1 minute",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Burpees",
          description:
            "A full body exercise used in strength training and as an aerobic exercise.",
          difficulty_level: "High",
          reps: 15,
          time_limit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Bicep Curls",
          description:
            "Strength training exercise that targets the biceps using weights or resistance bands.",
          difficulty_level: "Low",
          reps: 12,
          time_limit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Jumping Jacks",
          description:
            "A physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going overhead.",
          difficulty_level: "Low",
          reps: null,
          time_limit: "2 minutes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Leg Raises",
          description:
            "Lie on your back, legs straight, and raise your legs to a 90-degree angle slowly and controlled.",
          difficulty_level: "Medium",
          reps: 15,
          time_limit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Squats",
          description:
            "A compound exercise targeting the thighs, hips, buttocks, and lower back.",
          difficulty_level: "High",
          reps: 15,
          time_limit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Running",
          description:
            "A cardiovascular exercise that improves endurance and cardiovascular health.",
          difficulty_level: "Medium",
          reps: null,
          time_limit: "30 minutes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Bench Press",
          description:
            "Strengthens the chest, triceps, and shoulders using a barbell or dumbbells at a gym.",
          difficulty_level: "High",
          reps: 10,
          time_limit: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exercise_name: "Yoga",
          description:
            "Improves flexibility, balance, and mental well-being through various postures and breathing techniques.",
          difficulty_level: "Low",
          reps: null,
          time_limit: "60 minutes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WorkoutExercises", null, {});
  },
};
