import { Request, Response } from "express";
import axios from "axios";

export const NeuralNetController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    if (!userData) {
      return res.status(400).json({ error: "Invalid data" });
    }

    // Send data to the Python API
    const response = await axios.post("http://127.0.0.1:5000/predict", {
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
