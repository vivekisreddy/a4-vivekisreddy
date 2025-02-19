const connectToDB = require("../config/db");

const getWorkouts = async (req, res) => {
    if (!req.session.authenticated) return res.status(401).send("User not authenticated");

    const db = await connectToDB();
    const exercisesCollection = db.collection("exercises");
    const exercises = await exercisesCollection.find({ userId: req.session.userId }).toArray();

    res.json(exercises);
};

const addWorkout = async (req, res) => {
    if (!req.session.authenticated) return res.status(401).send("User not authenticated");

    const { name, duration, notes } = req.body;
    const db = await connectToDB();
    const exercisesCollection = db.collection("exercises");

    const newExercise = { name, duration, notes, userId: req.session.userId };
    const result = await exercisesCollection.insertOne(newExercise);

    res.json({ ...newExercise, _id: result.insertedId });
};

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    const db = await connectToDB();
    const exercisesCollection = db.collection("exercises");

    await exercisesCollection.deleteOne({ _id: new ObjectId(id) });
    res.status(200).send("Exercise deleted");
};

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { name, duration, notes } = req.body;
    const db = await connectToDB();
    const exercisesCollection = db.collection("exercises");

    const updatedExercise = await exercisesCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { name, duration, notes } },
        { returnDocument: "after" }
    );

    res.json(updatedExercise.value);
};

module.exports = { getWorkouts, addWorkout, deleteWorkout, updateWorkout };
