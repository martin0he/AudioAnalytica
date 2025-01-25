import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const NeuralNetController = async (req: Request, res: Response) => {
  const FLASK_URL = process.env.FLASK_URL || "http://localhost:5000";
  try {
    const userData = req.body;

    if (!userData) {
      return res.status(400).json({ error: "Invalid data" });
    }

    // Send data to the Python API
    const response = await axios.post(`${FLASK_URL}/predict`, {
      data: userData,
    });

    // Extract the score from the response
    const score = response.data.score;

    res.json({ score });
  } catch (error) {
    console.error(`Error during request to Flask API: ${error}`);
    res.status(500).json({ error });
  }
};
