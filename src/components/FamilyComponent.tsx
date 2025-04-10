import {simpsons} from "../data/arrays-2.ts";
import {CharacterComponent} from "./CharacterComponent.tsx";

export function FamilyComponent() {
    return (
        <>
            {
                simpsons.map((value, index) => <CharacterComponent key={index} name={value.name} surname={value.surname} age={value.age} photo={value.photo}>{value.info}</CharacterComponent>)
            }
        </>
    )
}