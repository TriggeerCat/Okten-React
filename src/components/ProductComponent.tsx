import {Product} from "../types/Product.ts";
import {FC, useState} from "react";
import '../styles/note.css'
import {ReviewComponent} from "./ReviewComponent.tsx";

type PropType = { product: Product }

export const ProductComponent: FC<PropType> = ({product}) => {
    const [booleanInfo, setBooleanInfo] = useState<boolean>(false);
    const [booleanReviews, setBooleanReviews] = useState<boolean>(false);

    return (
        <div className='sticky-note flex flex-col gap-2'>
            <div className='text-2xl'>{product.title}</div>
            <div>{product.description}</div>
            <div className='flex justify-between'>
                <p className='inline-block'>Category: {product.category}.</p>
                <p className='inline-block'>Price: {product.price}$</p>
                <p className='inline-block'>Discount Percentage: {product.discountPercentage}%</p>
                <p>User Rating: {product.rating}/5</p>
            </div>
            <div>Tags: {product.tags.join(', ')}</div>
            <div className='flex'>{product.images.map(value => <img className='w-36' src={value} alt={'error'}
                                                                    loading='lazy'/>)}</div>

            <button className='bg-gray-500 self-center w-30 border-1' onClick={() => setBooleanInfo(!booleanInfo)}>More
                info:
            </button>

            <div>{booleanInfo ?
                <>
                    <p>Brand: {product.brand}</p>
                    <p>Weight: {product.weight}</p>
                    <p></p>
                    <p>Warranty Information: {product.warrantyInformation}</p>
                    <p>Shipping Information: {product.shippingInformation}</p>
                    <p>Availability Status: {product.availabilityStatus}</p>
                    <p>Return policy: {product.returnPolicy}</p>
                </>
                : ''}</div>

            <button className='bg-gray-500 self-center w-30 border-1'
                    onClick={() => setBooleanReviews(!booleanReviews)}>Reviews:
            </button>

            <div>{booleanReviews ? product.reviews.map((value, index) => <ReviewComponent key={index} review={value}/>) : ''}</div>
        </div>
    )
}