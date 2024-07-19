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
    "user-read-private user-read-email user-top-read user-follow-read playlist-read-private playlist-read-collaborative user-library-read user-read-recently-played";

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
        limit: req.query.limit || 20, // Fetch top songs, default to 20 if not specified
        time_range: req.query.time_range || "short_term",
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

// Endpoint to fetch user's top artists
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
        time_range: req.query.time_range || "short_term",
        limit: req.query.limit || 20,
      },
    });

    res.json(data.items);
  } catch (error) {
    console.error("Failed to fetch user top artists:", error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Failed to fetch user top artists" });
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

    res.json(data.artists.items);
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
    const { data } = await axios.get(`${SPOTIFY_API_URL}/me/playlists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

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

// Endpoint to fetch user's savedalbums
export const getUserSavedAlbums = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data } = await axios.get(`${SPOTIFY_API_URL}/me/albums`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

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

// Endpoint to fetch user's top genres
export const getUserTopGenres = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Helper function to fetch user's top artists
  const getUserTopArtists = async (accessToken: string): Promise<any[]> => {
    const response = await axios.get(`${SPOTIFY_API_URL}/me/top/artists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: 50,
        time_range: "medium_term",
      },
    });

    return response.data.items;
  };

  try {
    const topArtists = await getUserTopArtists(accessToken);
    const genresCount: Record<string, number> = {};

    topArtists.forEach((artist) => {
      artist.genres.forEach((genre: string) => {
        if (genresCount[genre]) {
          genresCount[genre] += 1;
        } else {
          genresCount[genre] = 1;
        }
      });
    });

    const sortedGenres = Object.entries(genresCount).sort(
      (a, b) => b[1] - a[1]
    );
    const topGenres = sortedGenres.slice(0, 25).map(([genre]) => genre);
    res.json({ topGenres });
  } catch (error) {
    console.error("Failed to fetch user top genres:", error);
    res.status(500).json({ error: "Failed to fetch user top genres" });
  }
};

// Endpoint to fetch user's recent tracks
export const getUserRecentTracks = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data } = await axios.get(
      `${SPOTIFY_API_URL}/me/player/recently-played`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          before: new Date().getTime(),
        },
      }
    );

    res.json(data.items);
  } catch (error) {
    console.error("Failed to fetch recently played songs:", error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Failed to fetch recently played songs" });
    }
  }
};

// Helper function to get the user's recently played tracks with pagination
async function getAllRecentlyPlayedTracksWithPagination(
  accessToken: string
): Promise<any[]> {
  let allTracks: any[] = [];
  let url:
    | string
    | null = `${SPOTIFY_API_URL}/me/player/recently-played?limit=50`;

  while (url) {
    const response: any = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    allTracks = allTracks.concat(response.data.items);

    if (response.data.next) {
      const nextParams = new URL(response.data.next).searchParams;
      url = `${SPOTIFY_API_URL}/me/player/recently-played?${nextParams.toString()}`;
    } else {
      url = null;
    }
  }

  return allTracks;
}

// Endpoint to fetch user's total listening time in minutes
export const getUserListeningTime = async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const tracks = await getAllRecentlyPlayedTracksWithPagination(accessToken);
    let totalDurationMs = 0;

    tracks.forEach((item) => {
      totalDurationMs += item.track.duration_ms;
    });

    const totalDurationMinutes = totalDurationMs / (1000 * 60); // convert milliseconds to minutes
    res.json({ totalMinutes: totalDurationMinutes, size: tracks.length });
  } catch (error) {
    console.error("Failed to fetch user listening time:", error);
    res.status(500).json({ error: "Failed to fetch user listening time" });
  }
};
