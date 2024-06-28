'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkoutExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkoutExercise.init({
    exercise_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    difficulty_level: DataTypes.STRING,
    reps: DataTypes.INTEGER,
    time_limit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkoutExercise',
  });
  return WorkoutExercise;
};