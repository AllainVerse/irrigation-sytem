import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import Error404Page from "./pages/404";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "./index.css";
import Log from "@/pages/Log";
import Mainboard from "@/pages/Mainboard";
import Admin from "./pages/Admin/Admin";
import DataForm from "./pages/DataForm";
import Profile from "./pages/Profile";
import Feature from "./pages/Feature";
import Articlespage from "./pages/Articlespage";
import QualityData from "./pages/Admin/QualityData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error404Page />,
  },
  {
    path: "/login",
    element: <Login />, // Halaman Login
  },
  {
    path: "/register",
    element: <Register />, // Halaman Register
  },
  {
    path: "/Log",
    element: <Log />, // Halaman Irrigation Log
  },
  {
    path: "/Mainboard",
    element: <Mainboard />, // Mainboard
  },
  {
    path: "/Mainboard/:plot_id",
    element: <Mainboard />, // Mainboard
  },
  {
    path: "/Admin",
    element: <Admin />, // Mainboard
  },
  {
    path: "/DataForm",
    element: <DataForm />, // Mainboard
  },
  {
    path: "/Profile",
    element: <Profile />, // Mainboard
  },
  {
    path: "/Feature",
    element: <Feature />, //Feature Pages
  },
  {
    path: "/Articlespage",
    element: <Articlespage /> //Articles Pages
    

  },
  {
    path: "/QualityData",
    element: <QualityData />, //QualityData
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
