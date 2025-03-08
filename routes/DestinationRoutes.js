import express from "express";
import {
  getAllDestinations,
  getRandomDestination,
} from "../controllers/destinationController.js";

const router = express.Router();

// Get all destinations
router.get("/", getAllDestinations);

// Get a random destination
router.get("/random", getRandomDestination);

export default router;
