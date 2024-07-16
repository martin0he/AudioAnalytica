import { useEffect, useState } from "react";
import axios from "axios";
import { Artist } from "./useFollowingArtists";

export interface Album {
  id: string;
  images: { url: string; height: number; width: number }[];
  release_date: string;
  uri: string;
  genres: string[];
  name: string;
  popularity: number;
  artists: Artist[];
}

export interface AlbumObject {
  added_at: Date;
  album: Album;
}

interface UseSavedAlbumsResult {
  albums: AlbumObject[];
  loading: boolean;
  error: string | null;
}

export const useSavedAlbums = (): UseSavedAlbumsResult => {
  const [albums, setAlbums] = useState<AlbumObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSavedAlbums = async () => {
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
          `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userSavedAlbums`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAlbums(response.data as AlbumObject[]);
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

    fetchSavedAlbums();
  }, []);

  return { albums, loading, error };
};
