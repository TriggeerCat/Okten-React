import {ReactNode} from "react";

export interface Character {
    name: string,
    surname: string,
    age: number,
    photo: string,
    children: ReactNode;
}