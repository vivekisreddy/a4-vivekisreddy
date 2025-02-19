import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ workouts, setWorkouts }) => {
    return (
        <div>
            <h3>Your Workouts</h3>
            {workouts.length === 0 ? (
                <p>No workouts found</p>
            ) : (
                <ul>
                    {workouts.map((workout) => (
                        <WorkoutItem key={workout._id} workout={workout} setWorkouts={setWorkouts} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WorkoutList;
