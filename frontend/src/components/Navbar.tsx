import { Box, Link, Typography, useTheme } from "@mui/material";
import AccountAvatar from "./AccountAvatar";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      height="85px"
      sx={{
        backgroundColor: theme.palette.background.default,
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        href="/"
        width="wrap-content"
        margin="25px"
        sx={{
          textDecoration: isActive("/") ? "underline" : "none",
          textDecorationColor: isActive("/")
            ? "rgba(238,107,187,1)"
            : "inherit",
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
        justifyContent="center"
        width="100%"
      >
        <Link
          href="/home"
          width="wrap-content"
          marginY="25px"
          marginX="45px"
          sx={{
            textDecoration: isActive("/home") ? "underline" : "none",
            textDecorationColor: isActive("/home")
              ? "rgba(238,107,187,1)"
              : "inherit",
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
            textDecoration: isActive("/stats") ? "underline" : "none",
            textDecorationColor: isActive("/stats")
              ? "rgba(238,107,187,1)"
              : "inherit",
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
          sx={{
            textDecoration: isActive("/ai") ? "underline" : "none",
            textDecorationColor: isActive("/ai")
              ? "rgba(238,107,187,1)"
              : "inherit",
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
      <Box
        marginY="25px"
        marginLeft="45px"
        marginRight="40px"
        justifyContent={"flex-end"}
        width="wrap-content"
        height="wrap-content"
      >
        <AccountAvatar />
      </Box>
    </Box>
  );
};

export default Navbar;
