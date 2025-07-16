import {FC} from "react";

type PropsType = { popularity: number }

export const PopularityComponent: FC<PropsType> = ({popularity}) => {
    return (
        <>
            <hr/>
            <div>
                {popularity}
            </div>
        </>
    );
};