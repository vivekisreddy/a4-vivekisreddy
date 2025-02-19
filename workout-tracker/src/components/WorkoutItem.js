import React from 'react';
import axios from 'axios';

const WorkoutItem = ({ workout, setWorkouts }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/workouts/delete/${workout._id}`);
            setWorkouts((prev) => prev.filter((item) => item._id !== workout._id));
        } catch (error) {
            console.error('Error deleting workout', error);
        }
    };

    return (
        <li>
            <h4>{workout.name}</h4>
            <p>Duration: {workout.duration}</p>
            <p>Notes: {workout.notes}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default WorkoutItem;
