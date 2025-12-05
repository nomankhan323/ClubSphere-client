import { Link } from "react-router";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <div className="navbar bg-base-100 shadow">
            <div className="flex-1">
                <Link to="/" className="text-2xl font-bold">ClubSphere</Link>
            </div>
            <div className="flex gap-4">
                <Link to="/clubs">Clubs</Link>
                <Link to="/events">Events</Link>

                {user ? (
                    <>
                        <Link to="/dashboard/profile" className="btn btn-sm btn-primary">
                            Dashboard
                        </Link>
                        <button onClick={logout} className="btn btn-sm">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-sm">Login</Link>
                        <Link to="/register" className="btn btn-sm btn-primary">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
