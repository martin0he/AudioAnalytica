import express from "express";
import {
  getAccessToken,
  getTestData,
  getUserFollowingArtists,
  getUserPlaylists,
  getUserProfile,
  getUserTopArtists,
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
router.get("/userTopArtists", getUserTopArtists);
router.get("/userFollowingArtists", getUserFollowingArtists);
router.get("/userPlaylists", getUserPlaylists);

export default router;
