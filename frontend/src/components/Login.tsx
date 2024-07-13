import React from "react";
import axios from "axios";

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

  return (
    <div>
      <h2>Login with Spotify</h2>
      <button onClick={handleLogin}>Login with Spotify</button>
      <a href="/home">Home</a>
    </div>
  );
};

export default Login;
