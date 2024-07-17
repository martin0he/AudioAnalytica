import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OpeningPage from "./pages/OpeningPage";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import AiPage from "./pages/AiPage";
import Navbar from "./components/Navigation/Navbar";
import AuthRoute from "./AuthRoute";
import { UserProvider } from "./UserContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#5f1a7f",
      light: "#cea9db",
      dark: "#a88cc5",
    },
    error: {
      main: "#ff1744",
    },
    background: {
      default: "#f5f5f4",
    },
  },
  typography: {
    fontFamily: ['"Ubuntu", "Readex Pro"', "Arial", "sans-serif"].join(","),
    allVariants: {
      color: "#2e2d2d",
      fontWeight: 400,
      fontFamily: ['"Ubuntu", "Readex Pro"', "Arial", "sans-serif"].join(","),
      fontSize: "20px",
    },
  },
});

export const isAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<OpeningPage />} />
            <Route element={<AuthRoute />}>
              <Route
                path="/home"
                element={
                  <>
                    <Navbar />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="/stats"
                element={
                  <>
                    <Navbar />
                    <StatsPage />
                  </>
                }
              />
              <Route
                path="/ai"
                element={
                  <>
                    <Navbar />
                    <AiPage />
                  </>
                }
              />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
