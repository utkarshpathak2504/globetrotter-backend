import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import path from "path";

const generateInviteImage = async (username, score) => {
  try {
    const width = 800;
    const height = 400;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Ensure 'public/invite-images' exists
    const outputDir = path.resolve("public/invite-images");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Load background image safely
    const bgImagePath = path.resolve("assets/invite-bg.png");
    if (!fs.existsSync(bgImagePath)) {
      throw new Error(`Background image not found: ${bgImagePath}`);
    }
    const bgImage = await loadImage(bgImagePath);
    ctx.drawImage(bgImage, 0, 0, width, height);

    // Text styling
    ctx.fillStyle = "#fff";
    ctx.font = "bold 40px Arial";
    ctx.textAlign = "center";

    // Add text
    ctx.fillText("🚀 Globetrotter Challenge! 🚀", width / 2, 100);
    ctx.fillText(`${username} scored ${score} points!`, width / 2, 200);
    ctx.fillText("Think you can beat them?", width / 2, 300);

    // Save Image
    const fileName = `${username}-${score}.png`;
    const imagePath = path.join(outputDir, fileName);
    const out = fs.createWriteStream(imagePath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);

    // Return the URL only after the file is saved
    return new Promise((resolve, reject) => {
      out.on("finish", () => {
        resolve(`https://your-backend.com/invite-images/${fileName}`);
      });
      out.on("error", reject);
    });

  } catch (error) {
    console.error("Error generating invite image:", error);
    return null;
  }
};

export default generateInviteImage;
