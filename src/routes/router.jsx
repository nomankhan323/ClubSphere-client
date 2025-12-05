import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Clubs from "../pages/Clubs";
import ClubDetails from "../pages/ClubDetails";
import Events from "../pages/Events";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Dashboard/Profile";
import MyClubs from "../pages/Dashboard/MyClubs";
import CreateClub from "../pages/Dashboard/CreateClub";
import PrivateRoute from "../utils/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/clubs", element: <Clubs /> },
            { path: "/club/:id", element: <ClubDetails /> },
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
            { path: "profile", element: <Profile /> },
            { path: "my-clubs", element: <MyClubs /> },
            { path: "create-club", element: <CreateClub /> },
        ]
    }
]);
