// src/Welcome.tsx
import React from "react";
import { CircularProgress, Link, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useUser } from "../../UserContext";

const Welcome: React.FC = () => {
  const theme = useTheme();
  const { user } = useUser();

  return (
    <Link
      href="/home"
      sx={{
        width: "fit-content",
        display: "flex",
        textDecoration: "none",
      }}
    >
      <Typography
        fontWeight={600}
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
          fontSize: {
            xs: "18px",
            sm: "21px",
            md: "23px",
          },
          color: theme.palette.secondary.main,
          "&:hover": { color: theme.palette.secondary.dark },
        }}
      >
        Welcome, {user ? user.display_name : <CircularProgress size={12} />}
        <ArrowForwardIcon
          sx={{
            fontSize: {
              xs: "20px",
              sm: "25px",
              md: "30px",
            },
          }}
        />
      </Typography>
    </Link>
  );
};

export default Welcome;
