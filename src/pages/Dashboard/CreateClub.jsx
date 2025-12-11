import { useState } from "react";
import axiosSecure from "../../api/axios";

const CreateClub = () => {
    const [data, setData] = useState({ name: "", description: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axiosSecure.post("/clubs/create", data);
        alert("Club created!");
    };

    return (
        <form onSubmit={handleSubmit} className="p-5 w-96">
            <input
                type="text"
                placeholder="Club Name"
                className="w-full border p-2 mb-3"
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <textarea
                placeholder="Description"
                className="w-full border p-2 mb-3"
                onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                }
            ></textarea>

            <button className="bg-green-600 text-white px-4 py-2 w-full">
                Create Club
            </button>
        </form>
    );
};

export default CreateClub;
