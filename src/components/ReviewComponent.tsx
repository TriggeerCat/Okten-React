import {Review} from "../types/Product.ts";
import {FC} from "react";

export const ReviewComponent: FC<PropType> = ({review}) => {
    return (
        <>
            <div className='flex justify-between '>
                <div className='flex gap-3'>
                    <p>{review.rating}/5.</p>
                    <p>{review.reviewerName}</p>
                </div>
                <div>{new Date(Date.parse(review.date)).toDateString()}</div>
            </div>
            <div className='ml-5 mb-2'>{review.comment}</div>
        </>
    )
}

type PropType = { review: Review };
