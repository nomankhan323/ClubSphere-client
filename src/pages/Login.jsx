import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login, googleLogin } = useAuth();
    const { register, handleSubmit } = useForm();
    const nav = useNavigate();

    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password);
            nav("/dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded shadow">
            <h2 className="text-xl mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <input {...register("email")} className="input" placeholder="Email" />
                <input {...register("password")} type="password" className="input" placeholder="Password" />
                <button className="btn w-full bg-indigo-600 text-white p-2 rounded">Login</button>
            </form>
            <div className="mt-3">
                <button onClick={googleLogin} className="btn w-full bg-red-500 text-white p-2 rounded">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
