import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import GetterPage from "../pages/GetterPage.tsx";
import SetterPage from "../pages/SetterPage.tsx";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'getter', element: <GetterPage/>},
            {path: 'setter', element: <SetterPage/>}
        ]
    }
])

export default router;