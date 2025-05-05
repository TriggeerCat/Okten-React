import {useContext} from "react";
import {ThemeChanger} from "../context/ThemeChanger.tsx";

export const ComponentAA = () => {
    const {isDark} = useContext(ThemeChanger);

    return (
        <div>
            <p>Component AA</p>
            <p>Is Dark?: {isDark? "Yay" : "Nay"}</p>
        </div>
    );
};