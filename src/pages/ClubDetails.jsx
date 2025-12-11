import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthProvider";

const ClubDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const { data: club, isLoading } = useQuery({
        queryKey: ["club", id],
        queryFn: () => axios.get(`/clubs/${id}`).then(r => r.data),
    });

    if (isLoading) return <Loader />;

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded shadow">
            <h1 className="text-2xl font-bold">{club.clubName || club.name}</h1>
            <p className="mt-2">{club.description}</p>
            <p className="mt-2">Location: {club.location}</p>
            <p className="mt-2">Fee: {club.membershipFee ? `${club.membershipFee}৳` : "Free"}</p>

            <div className="mt-4">
                {user ? (
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded">Join Club</button>
                ) : (
                    <p>Please <a className="underline" href="/login">login</a> to join.</p>
                )}
            </div>
        </div>
    );
};

export default ClubDetails;
