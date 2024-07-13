import React, { useState, useEffect } from "react";
import axios from "axios";

const Songs: React.FC = () => {
  const [topSongs, setTopSongs] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTopSongs() {
      try {
        const response = await axios.get("/api/getTopSongs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Retrieve access token from localStorage
          },
        });

        setTopSongs(response.data);
      } catch (error) {
        console.error("Failed to fetch top songs:", error);
        setError("Failed to fetch top songs");
      }
    }

    fetchTopSongs();
  }, []);

  return (
    <div>
      <h1>My Top 5 Songs on Spotify</h1>
      {error && <p>{error}</p>}
      <ul>
        {topSongs.map((song: any) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
