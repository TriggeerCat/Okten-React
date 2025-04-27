import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../validators/car.validator.ts";
import {addCar} from "../services/car.service.ts";
import {Car} from "../types/Car.ts";


const SetterPage = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<Car>({mode: 'all', resolver: joiResolver(carValidator)});

    return (
        <form className='flex flex-col text-xl gap-3 mx-auto my-10 max-w-100' onSubmit={handleSubmit((formData) => {
            addCar(formData);
        })}>
            <label className="flex flex-col">
                <input type='text' className='border-2' {...register('brand')}></input>
                <div>{errors.brand && <span>{errors.brand.message}</span>}</div>
            </label>

            <label className="flex flex-col">
                <input type='text' className='border-2' {...register('year')}></input>
                <div>{errors.year && <span>{errors.year.message}</span>}</div>
            </label>
            <label className="flex flex-col">
                <input type='text' className='border-2' {...register('price')}></input>
                <div>{errors.price && <span>{errors.price.message}</span>}</div>
            </label>
            <button disabled={!isValid} className='border-2'>Send</button>
        </form>
    );
};

export default SetterPage;