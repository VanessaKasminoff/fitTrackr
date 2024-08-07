import { useState, useEffect } from "react";
import "../assets/scss/_fitness.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../assets/components/footer";

function Fitness() {
  const navigate = useNavigate();

  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    exercise_name: "",
    description: "",
    difficulty_level: "",
    reps: "",
    time_limit: "",
  });
  const [modifiedWorkout, setModifiedWorkout] = useState(false);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("/api/exercises");
      const data = await response.json();
      setWorkouts(data);
      console.log(data);
    };

    fetchExercises();
    setModifiedWorkout(false)
  }, [modifiedWorkout]);

  async function handleSubmit (e) {
    e.preventDefault()
    await fetch('/api/exercises', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWorkout),
    });
    setModifiedWorkout(true)
    navigate('/Fitness')
  }

  async function handleRemove(id, e) {
    e.preventDefault()
    await fetch(`/api/exercises/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setModifiedWorkout(true)
    navigate('/Fitness')
  }

  const handleAdd = (workout) => {
    if (!selectedWorkouts.find((w) => w.id === workout.id)) {
      setSelectedWorkouts([...selectedWorkouts, workout]);
    }
  };

  const handleDelete = (id) => {
    setSelectedWorkouts(
      selectedWorkouts.filter((workout) => workout.id !== id)
    );
  };

  return (
    <div className="workout">
      <div className="workouts-container">
        <h1>Fitness Workouts</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Exercise Name"
            value={newWorkout.exercise_name}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, exercise_name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newWorkout.description}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Difficulty"
            value={newWorkout.difficulty_level}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, difficulty_level: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Reps"
            value={newWorkout.reps}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, reps: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Time Limit"
            value={newWorkout.time_limit}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, time_limit: e.target.value })
            }
          />
          <button type="submit">Add New Workout</button>
        </form>
        {workouts.map((workout, index) => (
          <div
            className="workout-item"
            key={index}
            // style={{
            //   padding: "20px",
            //   border: "1px solid #ccc",
            //   marginBottom: "10px",
            // }}
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
              onClick={() => handleAdd(workout)}
              style={{ marginRight: "10px" }}
            >
              Add
            </button>
            <button type="submit" onClick={(e) => handleRemove(workout.id, e)}>Delete</button>
          </div>
        ))}
        <div className="selected-workouts">
          <h2>Selected Workouts</h2>
          {selectedWorkouts.length > 0 ? (
            selectedWorkouts.map((workout, index) => (
              <div key={index} className="selected-workout-item">
                <h3>{workout.exercise_name}</h3>
                <button onClick={() => handleDelete(workout.id)}>Remove</button>
              </div>
            ))
          ) : (
            <p>No workouts selected.</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Fitness;
