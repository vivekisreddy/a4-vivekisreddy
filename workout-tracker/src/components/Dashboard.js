import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';

const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/workouts/data');
                setWorkouts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching workouts', error);
            }
        };
        fetchWorkouts();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <WorkoutForm setWorkouts={setWorkouts} />
            {loading ? (
                <p>Loading workouts...</p>
            ) : (
                <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
            )}
        </div>
    );
};

export default Dashboard;
