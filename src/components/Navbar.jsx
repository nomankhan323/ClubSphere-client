import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="shadow-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <div className="container mx-auto flex items-center justify-between py-3 px-4">
                <Link to="/" className="text-2xl font-bold">ClubSphere</Link>

                <nav className="hidden md:flex gap-4 items-center">
                    <NavLink to="/" className="px-3 py-1">Home</NavLink>
                    <NavLink to="/clubs" className="px-3 py-1">Clubs</NavLink>
                    <NavLink to="/events" className="px-3 py-1">Events</NavLink>
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {!user ? (
                        <>
                            <NavLink to="/login" className="px-4 py-2 bg-indigo-600 text-white rounded">Login</NavLink>
                            <NavLink to="/register" className="px-4 py-2 bg-green-600 text-white rounded">Register</NavLink>
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard" className="px-3 py-2 bg-violet-600 text-white rounded">Dashboard</Link>
                            <button onClick={logout} className="px-3 py-2 bg-red-500 text-white rounded">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
