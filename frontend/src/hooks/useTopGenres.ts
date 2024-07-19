import { useEffect, useState } from "react";
import axios from "axios";

export interface Genre {
  topGenres: string[];
}

interface UseTopGenresResult {
  genres: Genre;
  loading: boolean;
  error: string | null;
}

export const useTopGenres = (): UseTopGenresResult => {
  const [genres, setGenres] = useState<Genre>({ topGenres: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopGenres = async () => {
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
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userTopGenres`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setGenres(response.data as Genre);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
        } else {
          setError("Failed to fetch top genres");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTopGenres();
  }, []);

  return { genres, loading, error };
};
