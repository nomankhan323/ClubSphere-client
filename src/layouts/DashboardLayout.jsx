import React from "react";
import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex">
            <aside
                style={{
                    width: "240px",
                    background: "#1a1f1d",
                    color: "white",
                    padding: "20px",
                }}
            >
                <h2 className="text-xl font-bold mb-6">Club Dashboard</h2>

                <nav className="flex flex-col gap-3">
                    <Link to="/dashboard" className="hover:underline">
                        Dashboard Home
                    </Link>
                    <Link to="/dashboard/create-club" className="hover:underline">
                        Create Club
                    </Link>
                    <Link to="/dashboard/create-event" className="hover:underline">
                        Create Event
                    </Link>
                    <Link to="/dashboard/manage-clubs" className="hover:underline">
                        Manage Clubs
                    </Link>
                    <Link to="/dashboard/my-clubs" className="hover:underline">
                        My Clubs
                    </Link>
                    <Link to="/dashboard/profile" className="hover:underline">
                        Profile
                    </Link>
                </nav>
            </aside>

            <main className="flex-1 p-6">
                <div className="flex justify-end mb-4">
                    <ThemeToggle />
                </div>

                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
