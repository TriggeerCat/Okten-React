import {FC} from "react";
import {VoteComponent} from "./VoteComponent.tsx";
import {OriginCountryComponent} from "./OriginCountryComponent.tsx";
import {BudgetComponent} from "./BudgetComponent.tsx";
import {MovieFull} from "../../types/MovieFull.ts";
import {ReleaseDateComponent} from "./ReleaseDateComponent.tsx";

type PropsType = {
    movie: MovieFull
}

export const FullPosterComponent: FC<PropsType> = ({movie}) => {
    return (
        <div className='rounded-2xl bg-neutral-700 flex flex-col align-middle p-5 gap-3'>
            <img src={"https://image.tmdb.org/t/p/w342" + movie.poster_path} alt="POSTER_PLACEHOLDER"/>
            <VoteComponent voteCount={movie.vote_count} voteAverage={movie.vote_average}/>
            <ReleaseDateComponent releaseDate={movie.release_date}/>
            <OriginCountryComponent originCountry={movie.origin_country}/>
            <BudgetComponent budget={movie.budget} revenue={movie.revenue}/>
        </div>
    );
};