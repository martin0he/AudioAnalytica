import { Box } from "@mui/material";
import SignOut from "../components/SignOut";

const HomePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <h1>Home Page</h1>
      <SignOut />
    </Box>
  );
};

export default HomePage;
