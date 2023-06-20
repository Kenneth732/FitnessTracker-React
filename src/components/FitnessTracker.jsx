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



  return (
    <div className="fitness-tracker">
  
    </div>
  );
};

export default FitnessTracker;
