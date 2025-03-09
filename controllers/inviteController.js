export const sendInvite = async (req, res) => {
  try {
    const { username, score } = req.body;

    if (!username || score === undefined) {
      return res.status(400).json({ error: "Username and score are required" });
    }

    // Construct the invite message without image
    const inviteText = `🚀 ${username} scored ${score} points in Globetrotter! Think you can beat them? Play now: https://globetrotter-frontend-ashen.vercel.app/quiz`;

    res.status(200).json({
      message: "Invite generated successfully",
      inviteText,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
