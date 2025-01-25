import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import spotifyRoutes from "./routes/spotifyRoutes";
import neuralNetRoutes from "./routes/neuralNetRoutes";

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT || "3001", 10);

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["https://audioanalytica.net"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Routes
app.use("/api/spotify", spotifyRoutes);
app.use("/api/neuralNet", neuralNetRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to AudioAnalytica Backend");
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log("Server is running on http://0.0.0.0:3001");
});
