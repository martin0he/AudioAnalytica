import { useEffect, useState } from "react";
import axios from "axios";
import { Artist } from "./useFollowingArtists";

interface UseTopArtistsResult {
  artists: Artist[];
  loading: boolean;
  error: string | null;
}

export const useTopArtists = (): UseTopArtistsResult => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopArtists = async () => {
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
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userTopArtists`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              type: "artist",
            },
          }
        );
        setArtists(response.data as Artist[]);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
        } else {
          setError("Failed to fetch top artists");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, []);

  return { artists, loading, error };
};
