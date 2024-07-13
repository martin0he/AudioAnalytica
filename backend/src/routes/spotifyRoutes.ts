import express from "express";
import {
  getAccessToken,
  getTestData,
  getUserProfile,
  getUserTopSongs,
  loginToSpotify,
} from "../controllers/spotifyController";

const router = express.Router();
router.get("/data", getTestData);

//auth
router.get("/login", loginToSpotify);
router.get("/accessToken", getAccessToken);

//user info
router.get("/userProfile", getUserProfile);
router.get("/userTopSongs", getUserTopSongs);

export default router;
