import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const fetchClubs = async ({ queryKey }) => {
    const [_key, { search, category, sort }] = queryKey;
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (category) params.append("category", category);
    if (sort) params.append("sort", sort);
    const res = await axios.get(`/clubs?${params.toString()}`);
    return res.data;
};

const Clubs = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("newest");

    const { data: clubs, isLoading, refetch } = useQuery({
        queryKey: ["clubs", { search, category, sort }],
        queryFn: fetchClubs,
        keepPreviousData: true,
    });

    return (
        <div>
            <div className="flex gap-3 mb-6">
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search clubs..." className="border p-2 rounded flex-1" />
                <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 rounded">
                    <option value="">All Categories</option>
                    <option>Photography</option>
                    <option>Sports</option>
                    <option>Tech</option>
                </select>
                <select value={sort} onChange={e => setSort(e.target.value)} className="border p-2 rounded">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highfee">Highest Fee</option>
                    <option value="lowfee">Lowest Fee</option>
                </select>
                <button onClick={() => refetch()} className="bg-indigo-600 text-white px-3 rounded">Search</button>
            </div>

            {isLoading ? <Loader /> : (
                <div className="grid md:grid-cols-3 gap-6">
                    {clubs?.map(c => (
                        <div key={c._id} className="p-4 rounded shadow bg-white dark:bg-slate-800">
                            <h3 className="font-semibold text-lg">{c.clubName || c.name}</h3>
                            <p className="text-sm mt-2">{c.description}</p>
                            <p className="mt-2 text-sm">Status: {c.status}</p>
                            <div className="mt-3">
                                <Link to={`/clubs/${c._id}`} className="text-indigo-600">View</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Clubs;
