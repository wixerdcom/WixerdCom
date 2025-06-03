import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Solutions from "../Pages/Solutions/Solutions";
import SofNova from "../Pages/Solutions/SofNova";
import Artistry from "../Pages/Solutions/Artistry";
import Wixact from "../Pages/Solutions/Wixact";
import Support from "../Pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/solutions",
        element: <Solutions />,
        children: [
          { index: true, element: <Navigate to="SofNova" replace /> },
          { path: "sofnova", element: <SofNova /> },
          { path: "artistry", element: <Artistry /> },
          { path: "wixact", element: <Wixact /> },
        ],
      },
      { path: "support", element: <Support /> },
    ],
  },
]);

export default router;
