import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="flex justify-center p-10">
            <form onSubmit={handleLogin} className="w-96 p-5 shadow">
                <h2 className="text-xl mb-4">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-3"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-purple-600 text-white px-4 py-2 w-full">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
