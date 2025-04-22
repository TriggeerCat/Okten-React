import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import ChoiceLayout from "../layouts/ChoiceLayout.tsx";
import PlaceholderPage from "../pages/PlaceholderPage.tsx";
import DummyPage from "../pages/DummyPage.tsx";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                path: ':primaryPath', element: <ChoiceLayout/>, children: [
                    {path: 'jsonplaceholder', element: <PlaceholderPage/>},
                    {path: 'dummyjson', element: <DummyPage/>}
                ]
            }
        ]
    }
])