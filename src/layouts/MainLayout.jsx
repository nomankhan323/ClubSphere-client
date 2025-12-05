import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[80vh] max-w-7xl mx-auto p-5">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
