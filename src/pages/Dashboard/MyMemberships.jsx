import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";

const MyMemberships = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ["my-memberships"],
        queryFn: async () => {
            const res = await api.get("/memberships");
            return res.data;
        }
    });

    if (isLoading) return <p>Loading memberships...</p>;

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">My Memberships</h2>

            {data.length === 0 && <p>No memberships found.</p>}

            <ul className="space-y-3">
                {data.map(m => (
                    <li key={m._id} className="border p-3 rounded">
                        <p><strong>Club ID:</strong> {m.clubId}</p>
                        <p>Status: {m.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyMemberships;
