import React, { useState } from 'react';
import './App.css';

function App() {
    const [exerciseName, setExerciseName] = useState('');
    const [exerciseType, setExerciseType] = useState('Cardio');
    const [duration, setDuration] = useState('');
    const [exercises, setExercises] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddExercise = () => {
        if (exerciseName && duration) {
            const newExercise = { name: exerciseName, type: exerciseType, duration };
            setExercises([...exercises, newExercise]);
            setExerciseName('');
            setDuration('');
        }
    };

    const handleDeleteExercise = (index) => {
        const newExercises = exercises.filter((_, i) => i !== index);
        setExercises(newExercises);
    };

    const handleEditExercise = (index) => {
        const exerciseToEdit = exercises[index];
        setExerciseName(exerciseToEdit.name);
        setExerciseType(exerciseToEdit.type);
        setDuration(exerciseToEdit.duration);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleSaveExercise = () => {
        const updatedExercise = { name: exerciseName, type: exerciseType, duration };
        const updatedExercises = [...exercises];
        updatedExercises[editIndex] = updatedExercise;
        setExercises(updatedExercises);
        setExerciseName('');
        setDuration('');
        setEditMode(false);
        setEditIndex(null);
    };

    const handleGitHubLogin = () => {
        console.log("GitHub Login triggered");
        window.location.href = 'http://localhost:5001/auth/github'; // Trigger GitHub login
    };

    return (
        <div className="App">
            <header>
                <h1>Workout Tracker</h1>
            </header>

            <div className="form-container">
                <input
                    type="text"
                    placeholder="Exercise Name"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                />
                <select value={exerciseType} onChange={(e) => setExerciseType(e.target.value)}>
                    <option value="Cardio">Cardio</option>
                    <option value="Strength">Strength</option>
                </select>
                <input
                    type="number"
                    placeholder="Duration (minutes)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                {!editMode ? (
                    <button onClick={handleAddExercise}>Add Exercise</button>
                ) : (
                    <button onClick={handleSaveExercise}>Save Changes</button>
                )}
            </div>

            <div className="exercise-table">
                <h2>Exercise Log</h2>
                {exercises.length > 0 && (
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Duration (min)</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {exercises.map((exercise, index) => (
                            <tr key={index}>
                                <td>{exercise.name}</td>
                                <td>{exercise.type}</td>
                                <td>{exercise.duration}</td>
                                <td>
                                    <button onClick={() => handleEditExercise(index)}>Edit</button>
                                    <button onClick={() => handleDeleteExercise(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

            <button onClick={handleGitHubLogin}>Login with GitHub</button>
        </div>
    );
}

export default App;
