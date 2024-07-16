import { Grid, Tooltip, Typography } from "@mui/material";
import { Playlist } from "../../useUserPlaylists";

interface UserPlaylistsGridProps {
  playlists: Playlist[];
}

const UserPlaylistsGrid = ({ playlists }: UserPlaylistsGridProps) => {
  return (
    <Grid container spacing={1}>
      {playlists && playlists.length > 0 ? (
        playlists.map((playlist) => (
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
                }}
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
