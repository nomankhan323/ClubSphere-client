import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="space-y-6">

            <section className="p-8 rounded shadow" style={{ background: "var(--card)" }}>
                <h1 className="text-4xl font-bold">Discover Local Clubs</h1>
                <p className="mt-2">Join events, meet people and grow together.</p>
                <div className="mt-4">
                    <Link to="/clubs" className="btn">Browse Clubs</Link>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded shadow" style={{ background: "var(--card)" }}>
                    <h3 className="font-semibold">Create Clubs</h3>
                    <p className="text-sm mt-2">Club managers can create and manage clubs.</p>
                </div>
                <div className="p-6 rounded shadow" style={{ background: "var(--card)" }}>
                    <h3 className="font-semibold">Events</h3>
                    <p className="text-sm mt-2">Organize events and manage registrations.</p>
                </div>
                <div className="p-6 rounded shadow" style={{ background: "var(--card)" }}>
                    <h3 className="font-semibold">Payments (Stripe)</h3>
                    <p className="text-sm mt-2">Secure payments for paid memberships & events.</p>
                </div>
            </section>

        </div>
    );
};

export default Home;
