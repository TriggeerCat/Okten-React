import {PaginationController} from "../components/Main/PaginationController.tsx";
import {MovieListCardPreloader} from "../components/Preloaders/MovieListCardPreloader.tsx";

export const MovieListPreloaderPage = () => {
    return (
        <div className='p-1 pt-18 w-full'>
            <div className='flex flex-wrap justify-around m-10'>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>

                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>

                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>

                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
                <MovieListCardPreloader/>
            </div>

            <PaginationController/>
        </div>
    );
};