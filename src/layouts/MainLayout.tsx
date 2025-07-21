import {HeaderComponent} from "../components/Header/HeaderComponent.tsx";
import {FooterComponent} from "../components/Footer/FooterComponent.tsx";
import {Outlet} from "react-router-dom";
import {GenreContext} from "../context/GenreContext.tsx";
import {useCallback, useState} from "react";

export const MainLayout = () => {
    const [genreFilter, setGenreFilter] = useState<number[]>([])

    return (
        <>
            <GenreContext.Provider value={{
                genres: genreFilter,
                clickGenre: useCallback((genre: number) => {
                    const newGenres = [...genreFilter];
                    const index = newGenres.indexOf(genre);
                    if (index === -1) {
                        newGenres.push(genre);
                    } else newGenres.splice(newGenres.indexOf(genre), 1);
                    setGenreFilter(newGenres);
                }, [genreFilter]),
                clearAllGenres: useCallback(() => {
                    setGenreFilter([]);
                }, [])
            }}>
                <HeaderComponent/>
                <Outlet/>
            </GenreContext.Provider>
            <FooterComponent/>
        </>
    );
};