import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import BankInfoPage from "../pages/BankInfoPage.tsx";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                path: 'info/:userId', element: <BankInfoPage/>
            }
        ]
    }
])