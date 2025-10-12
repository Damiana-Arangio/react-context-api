import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import TitoloStore from "../components/TitoloStore";

function Layout() {
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <main>
                <TitoloStore />
                <Outlet/>
            </main>
        </>
    )
}

export default Layout