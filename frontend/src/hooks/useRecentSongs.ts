import { useEffect, useState } from "react";
import axios from "axios";
import { Song } from "./useTopSongs";

interface UseRecentSongsResult {
  recentSongs: { track: Song; played_at: Date }[];
  loading: boolean;
  error: string | null;
}

export const useRecentSongs = (): UseRecentSongsResult => {
  const [recentSongs, setRecentSongs] = useState<
    { track: Song; played_at: Date }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentSongs = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Access token is required");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userRecentSongs`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRecentSongs(response.data as { track: Song; played_at: Date }[]);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
        } else {
          setError("Failed to fetch recent songs");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecentSongs();
  }, []);

  return { recentSongs, loading, error };
};
