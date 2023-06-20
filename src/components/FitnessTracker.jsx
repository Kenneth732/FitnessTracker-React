import React, { useState, useEffect } from 'react';

const FitnessTracker = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDuration, setExerciseDuration] = useState('');

  useEffect(() => {
    const exerciseStorage = JSON.parse(localStorage.getItem('exercise'));

    if (exerciseStorage) {
      setExerciseList(exerciseStorage);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (exerciseName.trim() === '' || exerciseDuration.trim() === '') {
      alert('Please fill in all the fields');
      return;
    }

    const newExercise = {
      id: exerciseList.length + 1,
      exerciseName: exerciseName,
      exerciseDuration: exerciseDuration,
      date: new Date().toLocaleDateString()
    };

    const updatedList = [...exerciseList, newExercise];
    setExerciseList(updatedList);
    localStorage.setItem('exercise', JSON.stringify(updatedList));

    setExerciseName('');
    setExerciseDuration('');
  };

  const handleExerciseNameChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleExerciseDurationChange = (e) => {
    setExerciseDuration(e.target.value);
  };

  return (
    <div className="fitness-tracker">
      <header>
        <h1>Fitness Tracker</h1>
      </header>

      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="exercise-name">Exercise Name:</label>
          <input
            type="text"
            id="exercise-name"
            value={exerciseName}
            onChange={handleExerciseNameChange}
            placeholder="Enter exercise name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exercise-duration">Duration (minutes):</label>
          <input
            type="number"
            id="exercise-duration"
            value={exerciseDuration}
            onChange={handleExerciseDurationChange}
            placeholder="Enter exercise duration"
            required
          />
        </div>

        <button type="submit">Log Exercise</button>
      </form>

      <div className="exercise-history">
        <h2>Exercise History</h2>
        {exerciseList.length === 0 ? (
          <p>No exercises logged.</p>
        ) : (
          <ul>
            {exerciseList.map((exercise) => (
              <li key={exercise.id} className="exercise-item">
                <h3>Exercise ID: {exercise.id}</h3>
                <h4>{exercise.exerciseName}</h4>
                <p>Duration: {exercise.exerciseDuration}</p>
                <p>Date: {exercise.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FitnessTracker;
