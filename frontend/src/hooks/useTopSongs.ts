import { useEffect, useState } from "react";
import axios from "axios";
import { Artist } from "./useFollowingArtists";

export interface Song {
  id: string;
  name: string;
  popularity: number;
  artists: Artist[];
  album: {
    name: string;
    images: { url: string; height: number; width: number }[];
  };
  external_urls: { spotify: string };
}

interface UseTopSongsResult {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

export const useTopSongs = (): UseTopSongsResult => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopSongs = async () => {
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
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userTopSongs`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSongs(response.data as Song[]);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
        } else {
          setError("Failed to fetch top songs");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTopSongs();
  }, []);

  return { songs, loading, error };
};
