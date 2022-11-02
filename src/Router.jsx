import { useQuery } from "@tanstack/react-query";
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
// import { Register } from "./Pages/Register";
import { getUser } from "./Queries/UserQueries";

//The register page is optional. Only load when required.
const Register = lazy(() => import("./Pages/Register"));

const AuthRoute = ({ children }) => {
  const { isError, error, isSuccess } = useQuery(["user"], getUser, {
    suspense: false,
  });

  const { response } = error || {};

  if (isError && response.status === 401) {
    return <Login />;
  }
  if (isSuccess) return children;
};
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
