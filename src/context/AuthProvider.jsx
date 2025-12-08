import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cs_user")) || null;
        } catch (e) {
            return null;
        }
    });

    useEffect(() => {
        localStorage.setItem("cs_user", JSON.stringify(user));
    }, [user]);

    const login = (email) => setUser({ email, name: email.split("@")[0] });
    const register = (email) => setUser({ email, name: email.split("@")[0] });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
