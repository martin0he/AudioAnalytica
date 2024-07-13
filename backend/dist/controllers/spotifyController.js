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
exports.loginToSpotify = exports.getTestData = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getTestData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Success" });
});
exports.getTestData = getTestData;
const clientId = process.env.SPOTIFY_CLIENT_ID || "";
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "";
const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
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
