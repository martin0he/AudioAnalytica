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
const SPOTIFY_API_URL = "https://api.spotify.com/v1";

export const loginToSpotify = async (req: Request, res: Response) => {
  const scopes =
    "user-read-private user-read-email user-top-read user-follow-read playlist-read-private playlist-read-collaborative"; // scopes

  const queryParams = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri,
  });

  const authUrl = `${SPOTIFY_AUTH_URL}?${queryParams.toString()}`;
  res.json({ authUrl });
};

// Endpoint to exchange authorization code for access token
export const getAccessToken = async (req: Request, res: Response) => {
  const { code } = req.query;

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);
  params.append("grant_type", "authorization_code");
  params.append("code", code as string);
  params.append("redirect_uri", redirectUri);

  try {
    const { data } = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;

    // Optionally, store tokens securely in your backend or session
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    res.status(500).json({ error: "Failed to retrieve access token" });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data } = await axios.get(`${SPOTIFY_API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.json(data);
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};

// Endpoint to fetch user's top songs
export const getUserTopSongs = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data } = await axios.get(`${SPOTIFY_API_URL}/me/top/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: req.query.limit || 5, // Fetch top songs, default to 5 if not specified
      },
    });

    res.json(data.items);
  } catch (error) {
    console.error("Failed to fetch user top songs:", error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Failed to fetch user top songs" });
    }
  }
};

// Endpoint to fetch user's top songs
export const getUserTopArtists = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data } = await axios.get(`${SPOTIFY_API_URL}/me/top/artists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: req.query.limit || 5, // Fetch top artists, default to 5 if not specified
      },
    });

    res.json(data.items);
  } catch (error) {
    console.error("Failed to fetch user top songs:", error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Failed to fetch user top songs" });
    }
  }
};

// Endpoint to fetch artists the user follows
export const getUserFollowingArtists = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data } = await axios.get(`${SPOTIFY_API_URL}/me/following`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        type: "artist",
      },
    });

    res.json(data.items);
  } catch (error) {
    console.error("Failed to fetch user's followed artists:", error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res
        .status(500)
        .json({ error: "Failed to fetch user's followed artists" });
    }
  }
};

// Endpoint to fetch user's playlists
export const getUserPlaylists = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const userProfileResponse = await axios.get(`${SPOTIFY_API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userId = userProfileResponse.data.id;

    // Then, use the user ID to fetch their playlists
    const { data } = await axios.get(
      `${SPOTIFY_API_URL}/users/${userId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json(data.items);
  } catch (error) {
    console.error("Failed to fetch user's playlists:", error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Failed to fetch user's playlists" });
    }
  }
};
