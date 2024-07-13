import express from "express";
import { getTestData, loginToSpotify } from "../controllers/spotifyController";

const router = express.Router();
router.get("/data", getTestData);
router.get("/login", loginToSpotify);

export default router;
