import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
  attempts: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Game = mongoose.model("Game", GameSchema);
export default Game;
