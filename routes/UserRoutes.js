import express from "express";
import { registerUser, updateScore, getUserScore } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/update-score", updateScore);
router.get("/getUser/:username", getUserScore);

export default router;
