import {
  Box,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useUser } from "../UserContext";
import { useUserPlaylists } from "../useUserPlaylists";

const HomePage = () => {
  const { user } = useUser();
  const { playlists } = useUserPlaylists();
  return user ? (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      width="100vw"
      height="85vh"
      marginTop="85px"
      sx={{ backgroundColor: "green" }}
    >
      <Typography marginTop="55px" fontFamily="Abril Fatface" fontSize={50}>
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
        sx={{ backgroundColor: "red" }}
      >
        <Grid
          container
          item
          md={4}
          sm={4}
          xs={12}
          display="flex"
          flexDirection="column"
        >
          <Typography>You Follow</Typography>
          <Grid item xs={4}>
            <img
              src="https://picsum.photos/200"
              alt="artist"
              width="90px"
              height="90px"
              style={{ borderRadius: "13px", boxShadow: "1px 1px 2px #000" }}
            />
          </Grid>
        </Grid>

        <Typography>Your Playlists</Typography>
        <Grid container item md={4} sm={4} xs={12}>
          {playlists && playlists.length > 0 ? (
            playlists.map((playlist) => (
              <Grid item key={playlist.id} xs={4}>
                <Tooltip arrow title={playlist.name} key={playlist.id}>
                  <img
                    src={playlist.images[0].url}
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
        <Grid
          container
          item
          md={4}
          sm={4}
          xs={12}
          display="flex"
          flexDirection="column"
        >
          <Typography>You Follow</Typography>
          <Grid item xs={4}>
            <img
              src="https://picsum.photos/200"
              alt="artist"
              width="90px"
              height="90px"
              style={{ borderRadius: "13px", boxShadow: "1px 1px 2px #000" }}
            />
          </Grid>
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
      sx={{ backgroundColor: "green" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default HomePage;
