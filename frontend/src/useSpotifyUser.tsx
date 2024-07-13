// src/useSpotifyUser.ts
import { useEffect } from "react";
import { useUser } from "./UserContext";
import axios from "axios";

const useSpotifyUser = () => {
  const { setUser } = useUser();

  useEffect(() => {
    const fetchSpotifyUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/spotify/userProfile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };

    fetchSpotifyUser();
  }, [setUser]);
};

export default useSpotifyUser;
