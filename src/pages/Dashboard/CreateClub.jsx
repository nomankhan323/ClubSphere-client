import React from "react";
import { useForm } from "react-hook-form";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateClub = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const qc = useQueryClient();

    const mutation = useMutation({
        mutationFn: (payload) => axios.post("/clubs/create", payload),
        onSuccess: () => {
            qc.invalidateQueries(["clubs"]);
            reset();
            alert("Club submitted for admin approval");
        }
    });

    const onSubmit = (data) => {
        const payload = {
            clubName: data.clubName,
            description: data.description,
            category: data.category,
            location: data.location,
            membershipFee: Number(data.membershipFee || 0),
            managerEmail: user.email,
            status: "pending",
            createdAt: new Date(),
        };
        mutation.mutate(payload);
    };

    return (
        <div className="max-w-xl bg-white dark:bg-slate-800 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Create Club</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <input {...register("clubName", { required: true })} placeholder="Club Name" className="w-full border p-2 rounded" />
                <textarea {...register("description")} placeholder="Description" className="w-full border p-2 rounded" />
                <input {...register("category")} placeholder="Category" className="w-full border p-2 rounded" />
                <input {...register("location")} placeholder="Location" className="w-full border p-2 rounded" />
                <input {...register("membershipFee")} placeholder="Membership Fee (0 = free)" type="number" className="w-full border p-2 rounded" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Create Club</button>
            </form>
        </div>
    );
};

export default CreateClub;
