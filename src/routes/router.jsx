import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Clubs from "../pages/Clubs";
import ClubDetails from "../pages/ClubDetails";
import Events from "../pages/Events";
import Login from "../pages/Login";
import Register from "../pages/Register";

import MyClubs from "../pages/Dashboard/MyClubs";
import CreateClub from "../pages/Dashboard/CreateClub";
import DashboardHome from "../pages/Dashboard/DashboardHome";

import PrivateRoute from "../utils/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "clubs", element: <Clubs /> },
            { path: "club/:id", element: <ClubDetails /> },
            { path: "events", element: <Events /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> }
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            { index: true, element: <DashboardHome /> },
            { path: "my-clubs", element: <MyClubs /> },
            { path: "create-club", element: <CreateClub /> }
        ]
    }
]);
