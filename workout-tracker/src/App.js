import React, { useState, useEffect } from "react";
import { checkAuth, getExercises, addExercise } from "./api";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const checkAuthentication = async () => {
      const response = await checkAuth();
      setAuthenticated(response.authenticated);
      if (response.authenticated) {
        const exercises = await getExercises();
        setExercises(exercises);
      }
    };
    checkAuthentication();
  }, [authenticated]);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleAddExercise = async (name, duration, notes) => {
    const newExercise = await addExercise(name, duration, notes);
    setExercises([...exercises, newExercise]);
  };

  return (
      <div>
        <h1>Workout Tracker</h1>
        {authenticated ? (
            <Dashboard exercises={exercises} onAddExercise={handleAddExercise} />
        ) : (
            <Login onLogin={handleLogin} />
        )}
      </div>
  );
};

export default App;
