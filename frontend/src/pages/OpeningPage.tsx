import { Box, Tooltip, Typography } from "@mui/material";
import Login from "../components/OpeningPage/Login";
import { isAuthenticated } from "../App";
import Welcome from "../components/OpeningPage/Welcome";
import Typewriter from "typewriter-effect";
import InfoIcon from "@mui/icons-material/Info";
import useSpotifyUser from "../hooks/useSpotifyUser";

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
      <Tooltip
        arrow
        placement="left-end"
        title={
          <Typography
            padding="5px"
            color="white"
            sx={{ fontSize: { md: "21px", sm: "17px", xs: "15px" } }}
          >
            This website is meant for non-commercial use only. Your listening
            data is not recorded or saved in any way, and any judgements or
            critiques made by the neural network are entirely biased as they are
            based upon my personal preferences. This project is open-source and
            the code can be found on GitHub as part of my personal portfolio
            @martin0he.
          </Typography>
        }
      >
        <InfoIcon
          sx={{
            fontSize: { md: "40px", sm: "30px", xs: "20px" },
            position: "absolute",
            top: "5px",
            right: "10px",
          }}
        />
      </Tooltip>
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
            fontSize: {
              xs: "40px",
              sm: "65px",
              md: "100px",
              lg: "120px",
              xl: "140px",
            },
          }}
        >
          AudioAnalytica
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "17px",
              sm: "18.5px",
              md: "20px",
              lg: "30px",
              xl: "40px",
            },
          }}
        >
          <Typewriter
            options={{
              strings: [
                "AI Music Analyzer",
                "Music Stats",
                "Let Me Judge Your Taste",
              ],
              autoStart: true,
              loop: true,
              delay: 45,
              skipAddStyles: true,
            }}
          />
        </Typography>

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
