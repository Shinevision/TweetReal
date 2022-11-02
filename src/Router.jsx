import { useQuery } from "@tanstack/react-query";
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Profile } from "./Pages/Profile";
// import { Register } from "./Pages/Register";
import { getUser } from "./Queries/UserQueries";

const AuthRoute = ({ children }) => {
  const { isError, error, isSuccess } = useQuery(["user"], getUser, {
    suspense: false,
  });

  const { response } = error || {};

  if (isError && response.status === 401) {
    return;
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
