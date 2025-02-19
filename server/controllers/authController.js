const bcrypt = require("bcrypt");
const connectToDB = require("../config/db");
const { ObjectId } = require("mongodb");

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const db = await connectToDB();
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await usersCollection.insertOne({ username, password: hashedPassword });

    req.session.authenticated = true;
    req.session.userId = result.insertedId.toString();
    res.redirect("/");
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const db = await connectToDB();
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Invalid username or password");
    }

    req.session.authenticated = true;
    req.session.userId = user._id.toString();
    res.redirect("/");
};

module.exports = { registerUser, loginUser };
