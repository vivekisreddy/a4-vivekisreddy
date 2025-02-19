import axios from "axios";

// Set base URL for all requests to the back-end
const API_URL = "http://localhost:3000"; // Update with the deployed server URL if needed

// Function to check user authentication
export const checkAuth = async () => {
    try {
        const response = await axios.get(`${API_URL}/check-auth`);
        return response.data;
    } catch (error) {
        console.error("Error checking authentication:", error);
        return { authenticated: false };
    }
};

// Function to register user
export const registerUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, password });
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// Function to login user
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

// Function to get exercises for the logged-in user
export const getExercises = async () => {
    try {
        const response = await axios.get(`${API_URL}/data`);
        return response.data;
    } catch (error) {
        console.error("Error fetching exercises:", error);
        throw error;
    }
};

// Function to add a new exercise
export const addExercise = async (name, duration, notes) => {
    try {
        const response = await axios.post(`${API_URL}/add`, { name, duration, notes });
        return response.data;
    } catch (error) {
        console.error("Error adding exercise:", error);
        throw error;
    }
};

// Function to update an exercise
export const updateExercise = async (id, name, duration, notes) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, { name, duration, notes });
        return response.data;
    } catch (error) {
        console.error("Error updating exercise:", error);
        throw error;
    }
};

// Function to delete an exercise
export const deleteExercise = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting exercise:", error);
        throw error;
    }
};
