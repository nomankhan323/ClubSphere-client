import React from "react";

const CreateClub = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Create a New Club</h1>

            <form className="mt-4 flex flex-col gap-3 max-w-lg">
                <input
                    type="text"
                    placeholder="Club Name"
                    className="border rounded p-2"
                />
                <textarea
                    placeholder="Club Description"
                    className="border rounded p-2"
                />
                <button className="bg-blue-600 text-white rounded px-4 py-2">
                    Create Club
                </button>
            </form>
        </div>
    );
};

export default CreateClub;
