import User from "../models/UserModel.js";

// 1️⃣ Register User
export const registerUser = async (req, res) => {
  let { username } = req.body;
  username = username.trim().toLowerCase();

  try {
    let existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ 
        error: "Username already taken", 
        suggestedUsername: `${username}${Math.floor(Math.random() * 100)}`
      });
    }

    const user = new User({ username });
    await user.save();
    res.json({ userId: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 2️⃣ Update Score
export const updateScore = async (req, res) => {
  const { userId, correct } = req.body;

  try {
    let user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.totalGames += 1;
    if (correct) {
      user.correctAnswers += 1;
      user.highestScore = Math.max(user.highestScore, user.correctAnswers);
    } else {
      user.incorrectAnswers += 1;
    }

    await user.save();
    res.json({ userId: user._id, username: user.username, totalGames: user.totalGames, highestScore: user.highestScore });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 3️⃣ Get User Score
export const getUserScore = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
   
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ userId: user._id, username: user.username, totalGames: user.totalGames, highestScore: user.highestScore, correctAnswers: user.correctAnswers, incorrectAnswers:user?.incorrectAnswers });
  } catch (err) {
    console.log('er',err.message)
    res.status(500).json({ error: "Server error" });
  }
};
