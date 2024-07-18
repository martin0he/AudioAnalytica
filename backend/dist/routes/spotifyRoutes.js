"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotifyController_1 = require("../controllers/spotifyController");
const router = express_1.default.Router();
router.get("/data", spotifyController_1.getTestData);
//auth
router.get("/login", spotifyController_1.loginToSpotify);
router.get("/accessToken", spotifyController_1.getAccessToken);
//user data
router.get("/userProfile", spotifyController_1.getUserProfile);
// top data
router.get("/userTopSongs", spotifyController_1.getUserTopSongs);
router.get("/userTopArtists", spotifyController_1.getUserTopArtists);
router.get("/userTopGenres", spotifyController_1.getUserTopGenres);
// library data
router.get("/userFollowingArtists", spotifyController_1.getUserFollowingArtists);
router.get("/userPlaylists", spotifyController_1.getUserPlaylists);
router.get("/userSavedAlbums", spotifyController_1.getUserSavedAlbums);
router.get("/userRecentTracks", spotifyController_1.getUserRecentTracks);
// misc
router.get("/userListeningTime", spotifyController_1.getUserListeningTime);
exports.default = router;
