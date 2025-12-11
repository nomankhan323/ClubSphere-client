// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Clubs from "../pages/Clubs";
import Events from "../pages/Events";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ClubDetails from "../pages/ClubDetails";
import PrivateRoute from "../utils/PrivateRoute";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import CreateClub from "../pages/Dashboard/CreateClub";
import ManageClubs from "../pages/Dashboard/ManageClubs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "clubs", element: <Clubs /> },
            { path: "clubs/:id", element: <ClubDetails /> },
            { path: "events", element: <Events /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { index: true, element: <DashboardHome /> },
            { path: "create-club", element: <CreateClub /> },
            { path: "manage-clubs", element: <ManageClubs /> },
        ],
    }
]);

export default router;
