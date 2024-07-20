import express from "express";
import {
  getAccessToken,
  getTestData,
  getUserFollowingArtists,
  getUserListeningTime,
  getUserPlaylists,
  getUserProfile,
  getUserRecentTracks,
  getUserSavedAlbums,
  getUserTopArtists,
  getUserTopFeatures,
  getUserTopGenres,
  getUserTopSongs,
  loginToSpotify,
} from "../controllers/spotifyController";

const router = express.Router();
router.get("/data", getTestData);

//auth
router.get("/login", loginToSpotify);
router.get("/accessToken", getAccessToken);

//user data
router.get("/userProfile", getUserProfile);

// top data
router.get("/userTopSongs", getUserTopSongs);
router.get("/userTopArtists", getUserTopArtists);
router.get("/userTopGenres", getUserTopGenres);

// library data
router.get("/userFollowingArtists", getUserFollowingArtists);
router.get("/userPlaylists", getUserPlaylists);
router.get("/userSavedAlbums", getUserSavedAlbums);
router.get("/userRecentSongs", getUserRecentTracks);

// misc
router.get("/userListeningTime", getUserListeningTime);
router.get("/userTopFeatures", getUserTopFeatures);

export default router;
