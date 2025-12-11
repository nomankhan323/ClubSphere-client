import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="p-4 bg-purple-600 text-white flex justify-between">
            <Link to="/" className="font-bold text-xl">ClubSphere</Link>

            <div className="flex gap-5 items-center">
                <Link to="/clubs">Clubs</Link>
                <Link to="/events">Events</Link>

                {user && (
                    <Link to="/dashboard">Dashboard</Link>
                )}

                {!user ? (
                    <Link to="/login" className="bg-white text-purple-600 px-3 py-1 rounded">
                        Login
                    </Link>
                ) : (
                    <button
                        onClick={logout}
                        className="bg-red-500 px-3 py-1 rounded"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
