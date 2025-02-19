import React, { useState } from 'react';
import axios from 'axios';

const WorkoutForm = ({ setWorkouts }) => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/workouts/add', { name, duration, notes });
            setWorkouts(prev => [...prev, response.data]);
            setName('');
            setDuration('');
            setNotes('');
        } catch (error) {
            console.error('Error adding workout', error);
        }
    };

    return (
        <div>
            <h3>Add a Workout</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Workout Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                ></textarea>
                <button type="submit">Add Workout</button>
            </form>
        </div>
    );
};

export default WorkoutForm;
