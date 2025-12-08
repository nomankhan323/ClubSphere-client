import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="bg-[var(--card)] text-[var(--text)] shadow">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-2xl font-bold">ClubSphere</Link>
                    <Link to="/clubs" className="hover:underline">Clubs</Link>
                    <Link to="/events" className="hover:underline">Events</Link>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {user ? (
                        <>
                            <button className="btn" onClick={() => navigate("/dashboard")}>Dashboard</button>
                            <button className="btn" onClick={() => { logout(); navigate("/"); }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn">Login</Link>
                            <Link to="/register" className="btn btn-primary">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
