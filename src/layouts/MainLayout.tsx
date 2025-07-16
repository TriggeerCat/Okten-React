import {HeaderComponent} from "../components/Header/HeaderComponent.tsx";
import {FooterComponent} from "../components/Footer/FooterComponent.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    );
};