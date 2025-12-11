import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return <Loader />;
    if (!user) return <Navigate to="/login" replace />;
    return children;
};

export default PrivateRoute;
