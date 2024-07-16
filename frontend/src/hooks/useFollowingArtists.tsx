import { useEffect, useState } from "react";
import axios from "axios";

export interface Artist {
  id: string;
  name: string;
  popularity: number;
  uri: string;
  images: { url: string; height: number; width: number }[];
}

interface UseFollowingArtistsResult {
  artists: Artist[];
  loading: boolean;
  error: string | null;
}

export const useFollowingArtists = (): UseFollowingArtistsResult => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowingArtists = async () => {
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
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userFollowingArtists`,
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
          setError("Failed to fetch following artists");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFollowingArtists();
  }, []);

  return { artists, loading, error };
};
