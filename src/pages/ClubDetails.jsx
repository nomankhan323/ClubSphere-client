import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ClubDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-2xl font-bold">Club Details</h1>
            <p className="mt-2">You are viewing club with id: {id}</p>

            <div className="mt-4 p-4 rounded shadow" style={{ background: "var(--card)" }}>
                <h3 className="font-semibold">Example Club Name</h3>
                <p className="text-sm">Location: Dhaka</p>
                <p className="mt-2">Membership Fee: Free</p>

                <div className="mt-3">
                    {user ? (
                        <button className="btn">Join Club</button>
                    ) : (
                        <p>Please <a className="underline" href="/login">login</a> to join.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;
