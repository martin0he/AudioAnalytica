import { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const getTestData = async (req: Request, res: Response) => {
  res.json({ message: "Success" });
};

const clientId = process.env.SPOTIFY_CLIENT_ID || "";
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "";
const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";

export const loginToSpotify = async (req: Request, res: Response) => {
  const scopes = "user-read-private user-read-email"; // Specify your scopes here

  const queryParams = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri,
  });

  const authUrl = `${SPOTIFY_AUTH_URL}?${queryParams.toString()}`;
  res.json({ authUrl });
};
