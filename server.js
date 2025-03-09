import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js"; // Ensure `.js` extension is included
import userRoutes from "./routes/UserRoutes.js";
import destinationRoutes from "./routes/DestinationRoutes.js";
import errorHandler from "./middleware/errormiddleware.js";
import gameRoutes from "./routes/GamesRoutes.js";
import inviteRoutes from "./routes/InviteRoutes.js"
// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/game", gameRoutes);  
app.use("/api/friends", inviteRoutes);  


// Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
