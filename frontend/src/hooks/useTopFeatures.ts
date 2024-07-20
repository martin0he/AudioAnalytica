import { useEffect, useState } from "react";
import axios from "axios";
import { useTopSongs } from "./useTopSongs";

export interface Feature {
  danceability: number;
  energy: number;
  loudness: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
  id: string;
  duration_ms: number;
}

interface UseTopFeaturesResult {
  features: Feature[];
  loading: boolean;
  error: string | null;
}

export const useTopFeatures = (): UseTopFeaturesResult => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Start with loading true to match initial fetch state
  const [error, setError] = useState<string | null>(null);

  const { songs, loading: songsLoading, error: songsError } = useTopSongs();

  useEffect(() => {
    // Only proceed if songs are loaded and there's no error
    if (songsLoading || songsError) {
      setLoading(false);
      setError(songsError);
      return;
    }

    const fetchTopFeatures = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Access token is required");
        setLoading(false);
        return;
      }
      try {
        const ids = songs.map((song) => song.id).join(",");
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userTopFeatures`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: { ids },
          }
        );
        setFeatures(response.data as Feature[]);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
        } else {
          setError("Failed to fetch top features");
        }
      } finally {
        setLoading(false);
      }
    };

    if (songs.length > 0) {
      fetchTopFeatures();
    } else {
      setLoading(false); // No songs to fetch features for, so not loading
    }
  }, [songs, songsLoading, songsError]); // Correctly reflect dependencies

  return { features, loading, error };
};
