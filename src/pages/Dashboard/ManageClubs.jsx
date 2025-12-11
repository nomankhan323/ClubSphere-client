import { useEffect, useState } from "react";
import axiosSecure from "../../api/axios";

const ManageClubs = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        axiosSecure.get("/clubs").then((res) => setClubs(res.data));
    }, []);

    return (
        <div className="p-5">
            <h2 className="text-xl mb-5">Manage Clubs</h2>

            {clubs.map((c) => (
                <div key={c._id} className="border p-3 mb-3">
                    <h3 className="font-bold">{c.name}</h3>
                    <p>Status: {c.status}</p>

                    {c.status === "pending" && (
                        <button
                            className="bg-blue-500 text-white px-3 py-1 mt-2"
                            onClick={() =>
                                axiosSecure.patch(`/clubs/approve/${c._id}`)
                            }
                        >
                            Approve
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ManageClubs;
