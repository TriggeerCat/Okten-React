import {getCars} from "../services/car.service.ts";
import {useEffect, useState} from "react";
import {Car} from "../types/Car.ts";
import CarComponent from "../components/CarComponent.tsx";

const GetterPage = () => {

    const [cars, setCars] = useState<Car[] | null>(null);

    useEffect(() => {
        getCars().then((rawData) => {
            setCars(rawData);
        });
    }, [])

    return (
        <ul>
            {cars?.map((value) => <CarComponent key={value.id} value={value}/>)}
        </ul>
    );
};

export default GetterPage;