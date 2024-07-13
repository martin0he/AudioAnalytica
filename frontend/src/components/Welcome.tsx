// src/Welcome.tsx
import React from "react";
import { Button, Link, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useUser } from "../UserContext";

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
      <Button
        sx={{
          textTransform: "none",
          padding: "15px",
          borderRadius: "14px",
          backgroundColor: theme.palette.secondary.light,
          boxShadow: "-1px 2px 3px #575459",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(4px)",
            boxShadow: "-2px 3px 5px #575459",
            backgroundColor: theme.palette.secondary.dark,
          },
        }}
      >
        <Typography
          fontWeight={400}
          sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          Welcome, {user?.display_name}
          <ArrowForwardIcon fontSize="inherit" />
        </Typography>
      </Button>
    </Link>
  );
};

export default Welcome;
