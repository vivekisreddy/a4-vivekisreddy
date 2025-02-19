const { MongoClient } = require('mongodb');

const mongoURI = "mongodb+srv://vkasireddy1:nEK05zFurqNgXF20@cs4241.hl2vl.mongodb.net/?retryWrites=true&w=majority&appName=CS4241";  // Replace with your actual MongoDB URI
const dbName = "workout_tracker";

let db;

const connectToDB = async () => {
    if (db) return db;
    try {
        const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(dbName);
        console.log("Connected to MongoDB");
        return db;
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
};

module.exports = connectToDB;
