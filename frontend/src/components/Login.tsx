import axios from "axios";

const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/spotify/login`
      );
      const authUrl = response.data.authUrl;

      if (authUrl) {
        window.location.href = authUrl; // Redirect to Spotify login page
      } else {
        console.error("Missing authUrl in response data");
      }
    } catch (error) {
      console.error("Error initiating login:", error);
    }
  };

  return (
    <div>
      <h2>Login with Spotify</h2>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default Login;
