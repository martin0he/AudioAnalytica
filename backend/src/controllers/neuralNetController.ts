import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3001;

export const NeuralNetController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // Send data to the Python API
    const response = await axios.post(`http://127.0.0.1:5000/predict`, {
      data: userData,
    });

    res.json({ score: response.data.score });
  } catch (error) {
    res.status(500).send(error);
  }
};
