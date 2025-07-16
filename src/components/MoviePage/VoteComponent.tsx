import {FC} from "react";

type PropsType = {
    voteAverage: number,
    voteCount: number
}

export const VoteComponent: FC<PropsType> = ({voteAverage, voteCount}) => {
    return (
        <>
            <hr/>
            <div className='text-center'>
                <div className='text-2xl font-bold'>
                    Рейтинг: {voteAverage.toFixed(2)}/10
                </div>
                <div>
                    (проголосувало {voteCount} осіб)
                </div>
            </div>
        </>
    );
};