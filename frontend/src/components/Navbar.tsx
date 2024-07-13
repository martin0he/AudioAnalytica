import { Box, Link, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      height="85px"
      sx={{
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        zIndex: 100,
        boxShadow: 2,
      }}
    >
      <Link
        href="/"
        width="wrap-content"
        margin="25px"
        sx={{
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "rgba(238,107,187,1)",
          },
        }}
      >
        <Typography
          fontSize={50}
          fontWeight={500}
          fontFamily={"Abril Fatface"}
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
          AA
        </Typography>
      </Link>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        width="100%"
      >
        <Link
          href="/home"
          width="wrap-content"
          marginY="25px"
          marginX="45px"
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: "rgba(238,107,187,1)",
            },
          }}
        >
          <Typography
            fontSize={35}
            fontWeight={500}
            fontFamily={"Abril Fatface"}
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
            home
          </Typography>
        </Link>
        <Link
          href="/stats"
          width="wrap-content"
          marginY="25px"
          marginX="45px"
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: "rgba(238,107,187,1)",
            },
          }}
        >
          <Typography
            fontSize={35}
            fontWeight={500}
            fontFamily={"Abril Fatface"}
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
            stats
          </Typography>
        </Link>
        <Link
          href="/ai"
          width="wrap-content"
          marginY="25px"
          marginX="45px"
          marginRight="70px"
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: "rgba(238,107,187,1)",
            },
          }}
        >
          <Typography
            fontSize={35}
            fontWeight={500}
            fontFamily={"Abril Fatface"}
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
            ai
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
