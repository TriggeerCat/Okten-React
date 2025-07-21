import {useCallback, useEffect, useState} from "react";
import {getMovieList, getMovieListBySearch} from "../services/api.service.ts";
import {MovieShortened} from "../types/MovieShortened.ts";
import {PaginationControllerComponent} from "../components/MovieList/PaginationControllerComponent.tsx";
import {MovieListCardComponent} from "../components/MovieList/MovieListCardComponent.tsx";
import {MovieListBannedCardComponent} from "../components/MovieList/MovieListBannedCardComponent.tsx";
import {MovieListPreloaderPage} from "../pages/MovieListPreloaderPage.tsx";
import {usePagination} from "../hooks/usePagination.ts";
import {useSearchQuery} from "../hooks/useSearchQuery.ts";

export const MovieListLayout = () => {
    const [movies, setMovies] = useState<MovieShortened[] | null>(null)
    const {page} = usePagination();
    const {searchQuery} = useSearchQuery();

    const refreshMovies = useCallback(async (searchQuery: string, page: number) => {
        let newMovies: MovieShortened[];
        if (searchQuery === '') newMovies = await getMovieList(page);
        else newMovies = await getMovieListBySearch(searchQuery, page);
        setMovies(newMovies);
    }, [])

    useEffect(() => {
        refreshMovies(searchQuery, page).then()
    }, [page, refreshMovies, searchQuery])

    if (movies) {
        return (
            <div className='p-1 pt-18 w-full'>
                <div className='flex flex-wrap justify-around m-10'>
                    {
                        movies ? movies.map((value) =>
                            value.original_language === 'ru' ? <MovieListBannedCardComponent/> :
                                <MovieListCardComponent key={value.id} movie={value}/>) : 'loading...'
                    }
                </div>

                <PaginationControllerComponent/>
            </div>
        );
    } else return <MovieListPreloaderPage/>
};