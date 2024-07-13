import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import spotifyRoutes from "./routes/spotifyRoutes";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/spotify", spotifyRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to AudioAnalytica Backend");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
