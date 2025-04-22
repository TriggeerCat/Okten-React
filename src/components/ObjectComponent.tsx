import {FC} from "react";

type PropType = { value: string }

const ObjectComponent: FC<PropType> = ({value}) => {
    return (
        <li className='text-xl m-5'>{value}</li>
    );
};

export default ObjectComponent;