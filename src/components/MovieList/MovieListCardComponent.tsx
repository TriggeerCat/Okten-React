import {PosterPreviewComponent} from "./PosterPreviewComponent.tsx";
import {GenreBadgeComponent} from "./GenreBadgeComponent.tsx";
import {RatingComponent} from "./RatingComponent.tsx";
import {MovieShortened} from "../../types/MovieShortened.ts";
import {FC} from "react";
import {MovieCardTitleComponent} from "./MovieCardTitleComponent.tsx";
import {generatePath, Link} from "react-router-dom";
import {PATHS} from "../../constants/Paths.ts";

type PropsType = {movie: MovieShortened}

export const MovieListCardComponent: FC<PropsType> = ({movie}) => {
    return (
        <Link to={generatePath(PATHS.moviePage, {id: movie.id})} className='p-2 w-1/10 hover:bg-neutral-700 rounded-2xl flex flex-col justify-between'>
            <div className='flex flex-col gap-3'>
                <PosterPreviewComponent posterPath={movie.poster_path}/>
                <MovieCardTitleComponent title={movie.title} originalTitle={movie.original_title}/>
            </div>
            <div className='flex justify-between w-full mt-3'>
                <GenreBadgeComponent genreIds={movie.genre_ids}/>
                <RatingComponent rating={movie.vote_average}/>
            </div>
        </Link>
    );
};