import {useEffect, useState} from "react";
import {getOneMovie} from "../services/api.service.ts";
import {useParams} from "react-router-dom";
import {MovieFull} from "../types/MovieFull.ts";
import {FullPosterComponent} from "../components/MoviePage/FullPosterComponent.tsx";
import {MoviePagePreloaderPage} from "../pages/MoviePagePreloaderPage.tsx";
import {MoviePageTitleComponent} from "../components/MoviePage/MoviePageTitleComponent.tsx";
import {VideoPreloader} from "../components/Preloaders/VideoPreloader.tsx";
import {GenreFullComponent} from "../components/MoviePage/GenreFullComponent.tsx";
import {DescriptionComponent} from "../components/MoviePage/DescriptionComponent.tsx";

export const MoviePageLayout = () => {
    const [movie, setMovie] = useState<MovieFull | null>(null)
    const params = useParams()

    useEffect(() => {
        getOneMovie(params.id).then((rawData) => {setMovie(rawData)})
    }, [params]);

    if (movie) {
        return (
            <div className='p-25 flex gap-10 m-auto'>
                <FullPosterComponent movie={movie}/>
                <div className='flex flex-col gap-4 w-240'>
                    <MoviePageTitleComponent originalTitle={movie.original_title} title={movie.title}/>
                    <VideoPreloader/>
                    <GenreFullComponent genres={movie.genres}/>
                    <DescriptionComponent tagline={movie.tagline} overview={movie.overview}/>
                </div>
            </div>
        );
    }
    else return <MoviePagePreloaderPage/>
};