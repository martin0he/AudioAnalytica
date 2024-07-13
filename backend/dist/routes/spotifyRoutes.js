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
//user info
router.get("/userProfileId", spotifyController_1.getUserProfileId);
router.get("/userProfile", spotifyController_1.getUserProfile);
router.get("/userTopSongs", spotifyController_1.getUserTopSongs);
exports.default = router;
