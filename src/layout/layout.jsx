import CookieBanner from "../components/CookieBanner/CookieBanner";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "about",
        },
        {
            name: "Gallery",
            link: "gallery",
        },
    ];

    return (
        <>
            <NavBar navItems={navItems} />
            <Outlet />
            <CookieBanner />
            <Footer />
        </>
    )

}

export default Layout;