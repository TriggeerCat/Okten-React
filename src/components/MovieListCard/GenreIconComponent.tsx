import {FaSquare} from "react-icons/fa";
import {GENRE_ID_TO_ICON} from "../../constants/GENRE_ID_TO_ICON.ts";
import {FC} from "react";

type PropsType = { id: number }

export const GenreIcon: FC<PropsType> = ({id}) => {
    const Icon = GENRE_ID_TO_ICON[id] ?? FaSquare;
    return <Icon/>
}