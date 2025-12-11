import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { register: authRegister } = useAuth();
    const { register, handleSubmit } = useForm();
    const nav = useNavigate();

    const onSubmit = async (data) => {
        try {
            const pw = data.password;
            if (pw.length < 6 || !/[A-Z]/.test(pw) || !/[a-z]/.test(pw)) {
                return alert("Password must be at least 6 chars and include upper & lower case letters");
            }
            await authRegister(data.email, data.password);
            nav("/dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded shadow">
            <h2 className="text-xl mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <input {...register("name")} className="input" placeholder="Full Name" />
                <input {...register("email")} className="input" placeholder="Email" />
                <input {...register("password")} type="password" className="input" placeholder="Password" />
                <input {...register("photoURL")} className="input" placeholder="Photo URL (optional)" />
                <button className="btn w-full bg-green-600 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default Register;
