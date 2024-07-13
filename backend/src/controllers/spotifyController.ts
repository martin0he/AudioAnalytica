import { Request, Response } from "express";

export const getSpotifyData = async (req: Request, res: Response) => {
  try {
    // Implement logic to fetch data from Spotify API
    res.json({ message: "Data from Spotify" });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
