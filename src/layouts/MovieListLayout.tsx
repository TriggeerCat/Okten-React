import {useEffect, useState} from "react";
import {getMovieList} from "../services/api.service.ts";
import {MovieShortened} from "../types/MovieShortened.ts";
import {useSearchParams} from "react-router-dom";
import {PaginationController} from "../components/Main/PaginationController.tsx";
import {MovieListCardComponent} from "../components/MovieListCard/MovieListCardComponent.tsx";
import {MovieListBannedCardComponent} from "../components/MovieListCard/MovieListBannedCardComponent.tsx";
import {MovieListPreloaderPage} from "../pages/MovieListPreloaderPage.tsx";

export const MovieListLayout = () => {
    const [movies, setMovies] = useState<MovieShortened[] | null>(null)
    const [query] = useSearchParams();

    useEffect(() => {
        getMovieList(query.get('page')).then((rawData) => {
            setMovies(rawData);
        });
    }, [query])

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

                <PaginationController/>
            </div>
        );
    }
    else return <MovieListPreloaderPage/>
};