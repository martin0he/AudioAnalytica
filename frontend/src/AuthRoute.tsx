// src/AuthRoute.tsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "./App";
import useSpotifyUser from "./hooks/useSpotifyUser";

const AuthRoute: React.FC = () => {
  useSpotifyUser();
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;
