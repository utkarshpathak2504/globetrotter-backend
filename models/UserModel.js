
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true, 
    unique: true 
  },
  username: { 
    type: String, 
    unique: true, 
    required: true, 
    trim: true, 
    lowercase: true 
  },
  totalGames: { type: Number, default: 0 },
  correctAnswers: { type: Number, default: 0 },
  incorrectAnswers: { type: Number, default: 0 },
  highestScore: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
export default User;
