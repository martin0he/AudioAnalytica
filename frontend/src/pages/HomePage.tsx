import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useUser } from "../UserContext";

const HomePage = () => {
  const { user } = useUser();
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
        width="100%"
        height="300px"
        sx={{ backgroundColor: "red" }}
      >
        <Grid container item md={4} sm={4} xs={12}>
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
        <Grid item md={4} sm={4} xs={12}></Grid>
        <Grid item md={4} sm={4} xs={12}></Grid>
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
