import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Clubs from "../pages/Clubs";
import Events from "../pages/Events";

import DashboardHome from "../pages/Dashboard/DashboardHome";
import CreateClub from "../pages/Dashboard/CreateClub";
import CreateEvent from "../pages/Dashboard/CreateEvent";
import ManageClubs from "../pages/Dashboard/ManageClubs";

import PrivateRoute from "../utils/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/clubs", element: <Clubs /> },
            { path: "/events", element: <Events /> },

            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
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
            { path: "", element: <DashboardHome /> },
            { path: "create-club", element: <CreateClub /> },
            { path: "create-event", element: <CreateEvent /> },
            { path: "manage-clubs", element: <ManageClubs /> },
        ],
    },
]);

export default router;
