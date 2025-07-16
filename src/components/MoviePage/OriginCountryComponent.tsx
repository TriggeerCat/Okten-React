import {FC} from "react";

type PropsType = { originCountry: string[] }

export const OriginCountryComponent: FC<PropsType> = ({originCountry}) => {
    return (
        <>
            <hr/>
            <div>
                Countr{originCountry.length === 1 ? 'y' : 'ies'} of origin: {originCountry.join(', ')}
            </div>
        </>
    );
};