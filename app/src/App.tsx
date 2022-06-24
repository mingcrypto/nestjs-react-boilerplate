import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { authUser, accessToken } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={authUser && accessToken ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/"
          element={
            authUser && accessToken ? <Dashboard /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
