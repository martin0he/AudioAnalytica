import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useUser } from "../UserContext";
import { useUserPlaylists } from "../hooks/useUserPlaylists";
import UserPlaylistsGrid from "../components/HomePage/UserPlaylistsGrid";
import UserFollowingArtistsGrid from "../components/HomePage/UserFollowingArtistsGrid";
import { useFollowingArtists } from "../hooks/useFollowingArtists";
import { useSavedAlbums } from "../hooks/useSavedAlbums";
import UserSavedAlbumsGrid from "../components/HomePage/UserSavedAlbumsGrid";

const HomePage = () => {
  const { user } = useUser();
  const { playlists } = useUserPlaylists();
  const { artists } = useFollowingArtists();
  const { albums } = useSavedAlbums();

  return user ? (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100vw"
      height="85vh"
      marginTop="95px"
    >
      <Typography marginTop="55px" fontFamily="Abril Fatface" fontSize={62}>
        Welcome, {user.display_name}
      </Typography>
      <Grid
        container
        padding="20px"
        width="100%"
        height="300px"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        marginTop="25px"
      >
        <Grid item xs={4} width="fit-content" height="50vh">
          <Typography marginBottom="10px">You Follow</Typography>
          <UserFollowingArtistsGrid artists={artists} />
        </Grid>

        <Grid item xs={4} width="fit-content" height="50vh">
          <Typography marginBottom="10px">Your Playlists</Typography>
          <UserPlaylistsGrid playlists={playlists} />
        </Grid>

        <Grid item xs={4} width="fit-content" height="50vh">
          <Typography marginBottom="10px">Saved Albums</Typography>
          <UserSavedAlbumsGrid albums={albums} />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="85vh"
      marginTop="85px"
    >
      <CircularProgress />
    </Box>
  );
};

export default HomePage;
