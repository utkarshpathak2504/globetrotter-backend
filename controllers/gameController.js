import Game from "../models/GameModel.js";
import Destination from "../models/DestinationModel.js";
import User from "../models/UserModel.js";

// 🎮 Start a new game session
export const startGame = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "User ID is required" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Select a random destination
    const count = await Destination.countDocuments();
    if (count === 0)
      return res.status(404).json({ error: "No destinations available" });

    const randomIndex = Math.floor(Math.random() * count);
    const destination = await Destination.findOne().skip(randomIndex);

    // Create a new game session
    const game = new Game({ user: userId, destination: destination._id });
    await game.save();

    res.status(201).json({
      gameId: game._id,
      userId: user._id,
      username: user.username,
      clues: destination.clues,
      message: "Game started! Use the clues to guess the destination.",
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// ✅ Submit an answer
export const submitAnswer = async (req, res) => {
  try {
    const { username, answer } = req.body;

    if (!username || !answer) {
      return res
        .status(400)
        .json({ error: "Username and answer are required" });
    }

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const destination = await Destination.findOne({
     city: new RegExp(`^${answer.trim().toLowerCase()}$`, "i"),
    });

    if (!destination) {
      user.incorrectAnswers += 1;
      await user.save();

      return res.status(200).json({
        correct: false,
        message: "❌ Wrong answer. Try again!",
        score: user.highestScore,
        correctAnswers: user.correctAnswers,
        incorrectAnswers: user.incorrectAnswers,
        highestScore: { type: Number, default: 0 },
        city: destination?.city,
      });
    }

    user.correctAnswers += 1;
    user.highestScore = Math.max(user.highestScore, user.correctAnswers);
    await user.save();

    res.status(200).json({
      correct: true,
      message: "🎉 Correct! You guessed the destination.",
      score: user.highestScore,
      correctAnswers: user.highestScore,
      incorrectAnswers: user.incorrectAnswers,
      highestScore: { type: Number, default: 0 },
      funFacts: destination.fun_fact,
      trivia: destination.trivia,
      city: destination.city,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
