import { Box, Typography } from "@mui/material";
import Login from "../components/Login";
import { isAuthenticated } from "../App";
import Welcome from "../components/Welcome";
import Typewriter from "typewriter-effect";
import useSpotifyUser from "../useSpotifyUser";

const OpeningPage = () => {
  useSpotifyUser();
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        width="wrap-content"
        height="wrap-content"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        rowGap="20px"
      >
        <Typography
          marginTop="40px"
          fontSize="100px"
          fontWeight="bold"
          fontFamily="Abril Fatface"
          sx={{
            backgroundcolor: "transparent",
            backgroundImage: `linear-gradient(to bottom, rgba(238,107,187,1) 35%, rgba(208,1,1,1) 100%)`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AudioAnalytica
        </Typography>

        <Typewriter
          options={{
            strings: ["AI Music Analyzer", "Spotify Stats"],
            autoStart: true,
            loop: true,
            delay: 75,
            skipAddStyles: true,
          }}
        />

        {isAuthenticated() ? (
          <Box marginTop="60px">
            <Welcome />
          </Box>
        ) : (
          <Box marginTop="60px">
            <Login />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OpeningPage;
