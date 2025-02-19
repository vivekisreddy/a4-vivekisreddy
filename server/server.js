const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(session({ secret: "your-secret-key", resave: false, saveUninitialized: true }));

app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);

// Serve React app (if built and served statically in production)
app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
