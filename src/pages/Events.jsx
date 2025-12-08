import React from "react";

const Events = () => {
    const events = [
        { id: "e1", title: "City Photo Walk", date: "2025-12-20" },
        { id: "e2", title: "Mountain Hike", date: "2025-12-27" },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Events</h1>

            <div className="grid gap-4">
                {events.map(e => (
                    <div key={e.id} className="p-4 rounded shadow" style={{ background: "var(--card)" }}>
                        <h3 className="font-semibold">{e.title}</h3>
                        <p className="text-sm">{e.date}</p>
                        <button className="btn btn-sm mt-2">Register</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
