import { useState, useEffect } from "react";

function Fitness() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("/api/exercises");
      const data = await response.json();
      setWorkouts(data);
      console.log(data);
    };

    fetchExercises();
  }, []);

  // Function to handle delete (placeholder for now)
  const handleDelete = (id) => {
    console.log("Delete workout with id:", id);
    // Here you will call API to delete
  };

  // Function to handle add (placeholder for now)
  const handleAdd = (id) => {
    console.log("Add workout with id:", id);
    // Here you will call API to add
  };

  return (
    <div>
      <h1>Fitness Workouts</h1>
      {workouts.map((workout) => (
        <div
          key={workout.id}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        >
          <h2>{workout.exercise_name}</h2>
          <p>
            <strong>Description:</strong> {workout.description}
          </p>
          <p>
            <strong>Difficulty:</strong> {workout.difficulty_level}
          </p>
          <p>
            <strong>Get them Reps:</strong> {workout.reps}
          </p>
          <p>
            <strong>Time Limit:</strong> {workout.time_limit}
          </p>
          <button
            onClick={() => handleAdd(workout.id)}
            style={{ marginRight: "10px" }}
          >
            Add
          </button>
          <button onClick={() => handleDelete(workout.id)}>Delete</button>
        </div>
      ))}
    </div>
  );

  //   return (
  //     <div>
  //       <h1>Fitness Workouts</h1>
  //       {workouts.map((workout) => {
  //         return (
  //           <div key={workout.id}>
  //             <h1>{workout.exercise_name}</h1>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
}

export default Fitness;
