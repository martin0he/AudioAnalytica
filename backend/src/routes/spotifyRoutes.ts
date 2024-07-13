import express from "express";
import { getSpotifyData } from "../controllers/spotifyController";

const router = express.Router();

router.get("/data", getSpotifyData);

export default router;
