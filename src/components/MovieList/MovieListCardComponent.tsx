import {PosterPreviewComponent} from "./PosterPreviewComponent.tsx";
import {GenreBadgeComponent} from "./GenreBadgeComponent.tsx";
import {RatingComponent} from "./RatingComponent.tsx";
import {MovieShortened} from "../../types/MovieShortened.ts";
import {FC, useContext, useEffect, useState} from "react";
import {MovieCardTitleComponent} from "./MovieCardTitleComponent.tsx";
import {generatePath, Link} from "react-router-dom";
import {PATHS} from "../../constants/Paths.ts";
import {GenreContext} from "../../context/GenreContext.tsx";

type PropsType = { movie: MovieShortened }

export const MovieListCardComponent: FC<PropsType> = ({movie}) => {
    const [tint, setTint] = useState<boolean>(false)
    const {genres} = useContext(GenreContext);

    useEffect(() => {
        const shouldTint = genres.length > 0 && !movie.genre_ids.some(id => genres.includes(id));
        setTint(shouldTint);
    }, [genres, movie.genre_ids]);


    return (
        <Link to={generatePath(PATHS.moviePage, {id: movie.id})}
              className={tint ? 'p-2 w-1/10 rounded-2xl flex flex-col justify-between opacity-40 z-[-1]' : 'p-2 w-1/10 hover:bg-neutral-700 rounded-2xl flex flex-col justify-between'}>
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