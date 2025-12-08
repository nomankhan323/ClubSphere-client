import React from "react";

const CreateEvent = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Create Event</h1>

            <form className="mt-4 flex flex-col gap-3 max-w-lg">
                <input type="text" placeholder="Event Title" className="border p-2" />
                <input type="date" className="border p-2" />
                <textarea placeholder="Description" className="border p-2" />

                <button className="bg-green-600 text-white px-4 py-2 rounded">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
