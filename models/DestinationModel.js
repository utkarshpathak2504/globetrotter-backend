import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  city: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  imageUrl: { type: String }, // Optional
  clues: [{ type: String, required: true }],
  fun_fact: [{ type: String }],
  trivia: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  options: { type: [String], required: true }
});

const Destination = mongoose.model("Destination", DestinationSchema);
export default Destination;
