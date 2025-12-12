import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 min-h-screen p-5 bg-[var(--card)] shadow">
                <h2 className="text-2xl font-bold mb-5">Dashboard</h2>

                <ul className="space-y-3">
                    <li><NavLink to="/dashboard" end>Home</NavLink></li>
                    <li><NavLink to="create-club">Create Club</NavLink></li>
                    <li><NavLink to="create-event">Create Event</NavLink></li>
                    <li><NavLink to="manage-clubs">Manage Clubs</NavLink></li>
                    <li><NavLink to="my-clubs">My Clubs</NavLink></li>
                    <li><NavLink to="profile">Profile</NavLink></li>
                </ul>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
