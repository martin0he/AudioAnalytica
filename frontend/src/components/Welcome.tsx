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
          color: theme.palette.text.primary,
          "&:hover": {
            transform: "translateY(3px)",
            boxShadow: "-2px 3px 5px #575459",
            backgroundColor: "transparent",
            color: theme.palette.secondary.dark,
            border: `2px solid ${theme.palette.secondary.dark}`,
          },
        }}
      >
        <Typography
          fontWeight={400}
          color="inherit"
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            fontSize: {
              xs: "15px",
              sm: "17px",
              md: "20px",
            },
          }}
        >
          Welcome, {user?.display_name}
          <ArrowForwardIcon fontSize="inherit" />
        </Typography>
      </Button>
    </Link>
  );
};

export default Welcome;
