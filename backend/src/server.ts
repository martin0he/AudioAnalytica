import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import spotifyRoutes from "./routes/spotifyRoutes";
import neuralNetRoutes from "./routes/neuralNetRoutes";
// -*- coding: utf-8 -*-
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json({ type: "application/json", limit: "10mb" }));
app.use(cors());

// Routes
app.use("/api/spotify", spotifyRoutes);
app.use("/api/neuralNet", neuralNetRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to AudioAnalytica Backend");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
