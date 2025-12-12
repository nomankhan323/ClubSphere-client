import { useEffect, useState } from "react";
import api from "../../api/axios";

const DashboardHome = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const res = await api.get("/dashboard/stats");
                setStats(res.data);
            } catch (error) {
                console.error("Dashboard Load Error:", error);
            } finally {
                setLoading(false);
            }
        };

        loadStats();
    }, []);

    if (loading || !stats) {
        return (
            <div className="p-10 text-center text-xl font-semibold">
                Loading dashboard...
            </div>
        );
    }

    return (
        <div className="p-6 rounded-xl shadow-lg" style={{ background: "var(--card)" }}>
            <h1 className="text-3xl font-bold mb-3">Dashboard Overview</h1>
            <p className="text-[var(--textSecondary)]">
                Welcome! Manage clubs, events, and members from here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                <div className="p-6 rounded-xl shadow text-center" style={{ background: "var(--card)" }}>
                    <h3 className="font-semibold text-lg">Total Clubs</h3>
                    <p className="text-5xl font-bold mt-3 text-blue-500">
                        {stats.totalClubs}
                    </p>
                </div>

                <div className="p-6 rounded-xl shadow text-center" style={{ background: "var(--card)" }}>
                    <h3 className="font-semibold text-lg">Events Created</h3>
                    <p className="text-5xl font-bold mt-3 text-green-500">
                        {stats.totalEvents}
                    </p>
                </div>

                <div className="p-6 rounded-xl shadow text-center" style={{ background: "var(--card)" }}>
                    <h3 className="font-semibold text-lg">Members Joined</h3>
                    <p className="text-5xl font-bold mt-3 text-purple-500">
                        {stats.totalMembers}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DashboardHome;
