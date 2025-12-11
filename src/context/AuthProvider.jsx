import React, { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axiosSecure from "../api/axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const googleLogin = () => signInWithPopup(auth, googleProvider);
    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem("token");
        setUser(null);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (current) => {
            if (current) {
                const token = await current.getIdToken(true);
                localStorage.setItem("token", token);


                try {
                    const res = await axiosSecure.post("/users/save", {
                        uid: current.uid,
                        email: current.email,
                        name: current.displayName || "",
                        photoURL: current.photoURL || "",
                    });

                    const backendUser = res.data;
                    setUser({
                        uid: current.uid,
                        email: current.email,
                        name: current.displayName || "",
                        photoURL: current.photoURL || "",
                        role: backendUser?.role || "member",
                    });
                } catch (err) {

                    setUser({ uid: current.uid, email: current.email, role: "member" });
                }
            } else {
                localStorage.removeItem("token");
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, register, login, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
