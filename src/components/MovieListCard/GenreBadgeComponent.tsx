import {FC} from "react";
import {GenreIcon} from "./GenreIconComponent.tsx";

type PropsType = {genreIds: number[]}

export const GenreBadgeComponent: FC<PropsType> = ({genreIds}) => {

    return (
        <div className='p-1 flex gap-1 flex-wrap'>
            {
                genreIds.map((value, index) => <GenreIcon key={index} id={value}/>)
            }
        </div>
    );
};