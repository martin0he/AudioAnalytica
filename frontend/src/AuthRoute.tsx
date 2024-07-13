// src/AuthRoute.tsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "./App";

const AuthRoute: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;
