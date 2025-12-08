import React from "react";

const Profile = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">My Profile</h1>

            <div className="mt-4 border p-4 rounded max-w-md">
                <p><strong>Name:</strong> User Name</p>
                <p><strong>Email:</strong> user@example.com</p>
            </div>
        </div>
    );
};

export default Profile;
