import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null;
};

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route
          path="/example1"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route
          path="/example2"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route
          path="/example3"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
