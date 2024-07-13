"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTopSongs = exports.getUserProfile = exports.getUserProfileId = exports.getAccessToken = exports.loginToSpotify = exports.getTestData = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const getTestData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Success" });
});
exports.getTestData = getTestData;
const clientId = process.env.SPOTIFY_CLIENT_ID || "";
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "";
const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const loginToSpotify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const scopes = "user-read-private user-read-email"; // Specify your scopes here
    const queryParams = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scopes,
        redirect_uri: redirectUri,
    });
    const authUrl = `${SPOTIFY_AUTH_URL}?${queryParams.toString()}`;
    res.json({ authUrl });
});
exports.loginToSpotify = loginToSpotify;
// Endpoint to exchange authorization code for access token
const getAccessToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.query;
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redirectUri);
    try {
        const { data } = yield axios_1.default.post("https://accounts.spotify.com/api/token", params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;
        // Optionally, store tokens securely in your backend or session
        res.json({ accessToken, refreshToken });
    }
    catch (error) {
        console.error("Error exchanging code for access token:", error);
        res.status(500).json({ error: "Failed to retrieve access token" });
    }
});
exports.getAccessToken = getAccessToken;
// Endpoint to fetch user profile ID
const getUserProfileId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!accessToken) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const { data } = yield axios_1.default.get(`${SPOTIFY_API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const userProfileId = data.id;
        res.json({ userProfileId });
    }
    catch (error) {
        console.error("Failed to fetch user profile ID:", error);
        res.status(500).json({ error: "Failed to fetch user profile ID" });
    }
});
exports.getUserProfileId = getUserProfileId;
// Endpoint to fetch user profile information
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!accessToken) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const { data } = yield axios_1.default.get(`${SPOTIFY_API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        res.json(data);
    }
    catch (error) {
        console.error("Failed to fetch user profile:", error);
        res.status(500).json({ error: "Failed to fetch user profile" });
    }
});
exports.getUserProfile = getUserProfile;
// Endpoint to fetch user's top songs
const getUserTopSongs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!accessToken) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const { data } = yield axios_1.default.get(`${SPOTIFY_API_URL}/me/top/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                limit: 5, // Fetch top 5 songs
            },
        });
        res.json(data.items);
    }
    catch (error) {
        console.error("Failed to fetch user top songs:", error);
        res.status(500).json({ error: "Failed to fetch user top songs" });
    }
});
exports.getUserTopSongs = getUserTopSongs;
