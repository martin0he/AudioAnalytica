import { Grid, Tooltip, Typography } from "@mui/material";
import { Playlist } from "../../useUserPlaylists";
import { useState } from "react";

interface UserPlaylistsGridProps {
  playlists: Playlist[];
}

const bounceAnimation = {
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
};

const hoverStyle = {
  transform: "translateY(-5px) scale(1.025)",
  boxShadow: "1px 4px 5px rgba(0, 0, 0, 0.6)",
};

const UserPlaylistsGrid = ({ playlists }: UserPlaylistsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Grid container spacing={1}>
      {playlists && playlists.length > 0 ? (
        playlists.map((playlist, index) => (
          <Grid item key={playlist.id} xs="auto">
            <Tooltip arrow title={playlist.name} key={playlist.id}>
              <img
                src={playlist.images[0]?.url || ""}
                alt={playlist.name}
                width="90px"
                height="90px"
                style={{
                  borderRadius: "13px",
                  boxShadow: "1px 1px 2px #000",
                  ...(hoveredIndex === index ? hoverStyle : {}),
                  ...bounceAnimation,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </Tooltip>
          </Grid>
        ))
      ) : (
        <Typography>na</Typography>
      )}
    </Grid>
  );
};

export default UserPlaylistsGrid;
