import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <aside className="w-64 min-h-screen bg-base-200 p-5">
                <h2 className="text-xl font-bold mb-5">Dashboard</h2>
                <ul className="space-y-3">
                    <li><Link to="/dashboard/profile" className="btn btn-sm w-full">Profile</Link></li>
                    <li><Link to="/dashboard/my-clubs" className="btn btn-sm w-full">My Clubs</Link></li>
                    <li><Link to="/dashboard/create-club" className="btn btn-sm w-full">Create Club</Link></li>
                </ul>
            </aside>

            <main className="flex-1 p-10">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
