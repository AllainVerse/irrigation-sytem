import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import Error404Page from "./pages/404";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error404Page />,
  },
  {
    path: "/login",
    element: <Login />,  // Halaman Login
  },
  {
    path: "/register",
    element: <Register />,  // Halaman Register
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
