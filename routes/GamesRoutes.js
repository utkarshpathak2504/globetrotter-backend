import express from "express";
import { startGame, submitAnswer } from "../controllers/gameController.js";

const router = express.Router();

router.post("/start", startGame);
router.post("/submit", submitAnswer);

export default router;
