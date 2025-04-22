import {FC} from "react";

type PropType = { value: Record<string, unknown> }

const ObjectComponent: FC<PropType> = ({value}) => {
    return (
        <ul className='m-5'>
            {Object.entries(value).map(([key, val], index) => (
                <li key={index} className='text-xl'>{key}: {String(val)}</li>
            ))}
        </ul>
    );
};

export default ObjectComponent;