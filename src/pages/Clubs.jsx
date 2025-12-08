import React from "react";
import { Link } from "react-router-dom";

const Clubs = () => {

    const clubs = [
        { id: "1", name: "Photography Club", location: "Dhaka", fee: 0 },
        { id: "2", name: "Hiking Group", location: "Chittagong", fee: 10 },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Clubs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clubs.map(c => (
                    <div key={c.id} className="p-4 rounded shadow" style={{ background: "var(--card)" }}>
                        <h3 className="font-semibold">{c.name}</h3>
                        <p className="text-sm">{c.location}</p>
                        <p className="mt-2">Fee: {c.fee === 0 ? "Free" : `$${c.fee}`}</p>

                        <Link to={`/club/${c.id}`} className="btn btn-sm mt-3 inline-block">
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clubs;
