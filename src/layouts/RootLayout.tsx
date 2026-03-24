import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CategoryProvider } from "@/context/CategoryProvider";

const RootLayout = () => {
    return (
        <CategoryProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </CategoryProvider>
    )
}

export default RootLayout;