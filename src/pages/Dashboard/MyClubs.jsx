import { useEffect, useState } from "react";
import api from "../../api/axios";

const MyClubs = () => {
    const [myClubs, setMyClubs] = useState([]);

    useEffect(() => {
        const loadMyClubs = async () => {
            const user = JSON.parse(localStorage.getItem("clubUser"));
            if (!user) return;

            const res = await api.get("/clubs");
            const filtered = res.data.filter(
                (c) => c.managerEmail === user.email
            );

            setMyClubs(filtered);
        };

        loadMyClubs();
    }, []);

    return (
        <div>
            <h2>My Clubs</h2>
            {myClubs.map((club) => (
                <div key={club._id}>{club.name}</div>
            ))}
        </div>
    );
};

export default MyClubs;
