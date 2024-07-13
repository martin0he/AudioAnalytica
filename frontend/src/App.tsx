import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Navigate } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      default: "#f0f0ee",
    },
  },
  typography: {
    fontFamily: ['"Ubuntu", "Readex Pro"', "Arial", "sans-serif"].join(","),
    allVariants: {
      color: "#0e0e0e",
      fontWeight: 400,
      fontFamily: ['"Ubuntu", "Readex Pro"', "Arial", "sans-serif"].join(","),
      fontSize: "20px",
    },
  },
});

export const isAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null;
};

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<OpeningPage />} />
          <Route
            path="/home"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          <Route path="/example1" element={<HomePage />} />
          <Route path="/example2" element={<HomePage />} />
          <Route path="/example3" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
