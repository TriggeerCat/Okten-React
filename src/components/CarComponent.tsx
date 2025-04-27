import {Car} from "../types/Car.ts";
import {FC} from "react";

type PropsType = { value: Car };

const CarComponent: FC<PropsType> = ({value}) => {
    return (
        <li>
            {value.id}. {value.brand} {value.year} — {value.price}$
        </li>
    );
};

export default CarComponent;