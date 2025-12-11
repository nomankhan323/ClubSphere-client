import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import ThemeToggle from "../components/ThemeToggle";

const DashboardLayout = () => {
    const { user } = useAuth();

    const menuByRole = {
        admin: [
            { to: "/dashboard", label: "Overview" },
            { to: "/dashboard/manage-clubs", label: "Manage Clubs" },
            { to: "/dashboard/users", label: "Manage Users" },
        ],
        manager: [
            { to: "/dashboard", label: "Overview" },
            { to: "/dashboard/create-club", label: "Create Club" },
            { to: "/dashboard/my-clubs", label: "My Clubs" },
        ],
        member: [
            { to: "/dashboard", label: "Overview" },
            { to: "/dashboard/my-memberships", label: "My Clubs" },
        ]
    };

    const items = menuByRole[user?.role] || menuByRole.member;

    return (
        <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
            <aside className="w-64 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-5 shadow">
                <h2 className="font-bold mb-4">Club Dashboard</h2>
                <nav className="flex flex-col gap-2">
                    {items.map(i => <Link key={i.to} to={i.to} className="py-2 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700">{i.label}</Link>)}
                </nav>
            </aside>

            <div className="flex-1 p-6">
                <div className="flex justify-end mb-4">
                    <ThemeToggle />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
