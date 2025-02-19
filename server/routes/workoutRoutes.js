const express = require("express");
const { getWorkouts, addWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/data", authMiddleware, getWorkouts);
router.post("/add", authMiddleware, addWorkout);
router.delete("/delete/:id", authMiddleware, deleteWorkout);
router.put("/update/:id", authMiddleware, updateWorkout);

module.exports = router;
