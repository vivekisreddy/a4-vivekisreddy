const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// Add Exercise
router.post('/', async (req, res) => {
    const { name, type, duration, sets, reps } = req.body;

    try {
        const newExercise = new Exercise({
            name,
            type,
            duration,
            sets,
            reps,
        });

        await newExercise.save();
        res.status(201).json(newExercise);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get All Exercises (for testing)
router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
