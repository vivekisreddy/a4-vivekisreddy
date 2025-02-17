const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // Duration in minutes
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
