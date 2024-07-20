import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useUser } from "../UserContext";
import { useUserPlaylists } from "../hooks/useUserPlaylists";
import UserPlaylistsGrid from "../components/HomePage/UserPlaylistsGrid";
import UserFollowingArtistsGrid from "../components/HomePage/UserFollowingArtistsGrid";
import { useFollowingArtists } from "../hooks/useFollowingArtists";
import { useSavedAlbums } from "../hooks/useSavedAlbums";
import UserSavedAlbumsGrid from "../components/HomePage/UserSavedAlbumsGrid";

const HomePage = () => {
  const { user } = useUser();
  const { playlists, loading: playlistsLoading } = useUserPlaylists();
  const { artists, loading: artistsLoading } = useFollowingArtists();
  const { albums, loading: albumsLoading } = useSavedAlbums();

  const theme = useTheme();

  return user ? (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100vw"
      height="calc(100vh - 150px)"
      marginTop="95px"
    >
      <Typography
        marginTop="55px"
        fontFamily="Abril Fatface"
        sx={{ fontSize: { md: 62, sm: 52, xs: 42 } }}
      >
        Welcome, {user.display_name}
      </Typography>
      {playlistsLoading || artistsLoading || albumsLoading ? (
        <Box
          padding="20px"
          width="93%"
          height="75%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Grid
          container
          padding="20px"
          width="93%"
          height="75%"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          marginTop="25px"
        >
          <Grid
            item
            xs={4}
            width="fit-content"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            sx={{ alignItems: { sm: "flex-start", xs: "center" } }}
          >
            <Typography marginBottom="10px">You Follow</Typography>
            <UserFollowingArtistsGrid artists={artists} />
          </Grid>

          <Grid
            item
            xs={4}
            width="fit-content"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            sx={{ alignItems: { sm: "flex-start", xs: "center" } }}
          >
            <Typography marginBottom="10px">Your Playlists</Typography>
            <UserPlaylistsGrid playlists={playlists} />
          </Grid>

          <Grid
            item
            xs={4}
            width="fit-content"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            sx={{ alignItems: { sm: "flex-start", xs: "center" } }}
          >
            <Typography marginBottom="10px">Saved Albums</Typography>
            <UserSavedAlbumsGrid albums={albums} />
          </Grid>
        </Grid>
      )}
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
      <CircularProgress sx={{ color: theme.palette.primary.main }} />
    </Box>
  );
};

export default HomePage;
