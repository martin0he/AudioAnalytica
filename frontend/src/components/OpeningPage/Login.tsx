import React from "react";
import axios from "axios";
import { Button, Typography, useTheme } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/spotify/login`
      );
      const authUrl = response.data.authUrl;

      if (authUrl) {
        window.location.href = authUrl; // Redirect user to Spotify authorization
      } else {
        console.error("Missing authUrl in response data");
      }
    } catch (error) {
      console.error("Error initiating login:", error);
    }
  };

  // Function to extract code from URL parameters
  const getCodeFromUrl = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("code");
  };

  // Function to exchange code for access token
  const getAccessToken = async (code: any) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/spotify/accessToken?code=${code}`
      );
      const accessToken = response.data.accessToken;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken); // Store access token in localStorage
        console.log("Access token stored in localStorage:", accessToken);

        // Redirect or navigate to another page after successful login
        // Example: window.location.href = '/dashboard';
      } else {
        console.error("No access token received");
      }
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  // Check for authorization code in URL on component mount
  React.useEffect(() => {
    const code = getCodeFromUrl();
    if (code) {
      getAccessToken(code); // Exchange code for access token
    }
  }, []);

  const theme = useTheme();

  return (
    <Button
      onClick={handleLogin}
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
        Sign in with Spotify <LoginIcon fontSize="inherit" />
      </Typography>
    </Button>
  );
};

export default Login;
