import React from "react";

const DashboardHome = () => {
    return (
        <div className="bg-[var(--card)] p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
            <p className="text-[var(--textSecondary)]">
                Welcome to your dashboard! Here you can manage clubs, create new ones,
                and explore your activities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-[var(--bg)] rounded shadow">
                    <h3 className="font-semibold text-lg">Total Clubs</h3>
                    <p className="text-3xl font-bold mt-2">12</p>
                </div>

                <div className="p-4 bg-[var(--bg)] rounded shadow">
                    <h3 className="font-semibold text-lg">Events Created</h3>
                    <p className="text-3xl font-bold mt-2">5</p>
                </div>

                <div className="p-4 bg-[var(--bg)] rounded shadow">
                    <h3 className="font-semibold text-lg">Members Joined</h3>
                    <p className="text-3xl font-bold mt-2">47</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
