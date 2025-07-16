import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {MovieListLayout} from "../layouts/MovieListLayout.tsx";
import {MoviePageLayout} from "../layouts/MoviePageLayout.tsx";

export const router = createBrowserRouter([{
    path: '', element: <MainLayout/>, children: [
        {index: true,  element: <MovieListLayout/>},
        {path: 'info/:id', element: <MoviePageLayout/>}
    ]
}])