import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {MovieListLayout} from "../layouts/MovieListLayout.tsx";
import {MoviePageLayout} from "../layouts/MoviePageLayout.tsx";
import {PATHS} from "../constants/Paths.ts";

export const router = createBrowserRouter([{
    path: '', element: <MainLayout/>, children: [
        {index: true,  element: <MovieListLayout/>},
        {path: PATHS.moviePage, element: <MoviePageLayout/>}
    ]
}])