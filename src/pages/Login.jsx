import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState("");
    const { login } = useAuth();
    const nav = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        login(email);
        nav("/dashboard");
    };

    return (
        <div className="max-w-md mx-auto p-6 rounded shadow" style={{ background: "var(--card)" }}>
            <h2 className="text-xl font-bold mb-4">Login</h2>

            <form onSubmit={submit} className="space-y-3">
                <input
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <button type="submit" className="btn w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;
