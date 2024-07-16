import { useEffect, useState } from "react";
import axios from "axios";

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  images: { url: string; width: number; height: number }[];
  uri: string;
  tracks: { href: string; total: number };
}

interface UseUserPlaylistsResult {
  playlists: Playlist[];
  loading: boolean;
  error: string | null;
}

export const useUserPlaylists = (): UseUserPlaylistsResult => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
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
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userPlaylists`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPlaylists(response.data as Playlist[]);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
        } else {
          setError("Failed to fetch playlists");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  return { playlists, loading, error };
};
