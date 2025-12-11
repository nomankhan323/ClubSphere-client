import api from "../api/axios";
import { useEffect, useState } from "react";

const Clubs = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const load = async () => {
            const res = await api.get("/clubs");
            setClubs(res.data);
        };
        load();
    }, []);

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {clubs.map((club) => (
                <div key={club._id} className="shadow p-4 rounded bg-white">
                    <h2 className="font-bold">{club.name}</h2>
                    <p>{club.description}</p>
                    <p>Status: {club.status}</p>
                </div>
            ))}
        </div>
    );
};

export default Clubs;
