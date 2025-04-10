
import {Character} from "../data/Character.ts";
import {FC} from "react";

export const CharacterComponent: FC<Character> = ({name, surname, age, photo, children}) => {
    return (
        <div className='my-10'>
            <h2>{name} {surname}</h2>
            <p>Age: {age}</p>
            <img src={photo} alt={name + '' + surname}/>
            <p>Info: {children}</p>
        </div>
    )
}