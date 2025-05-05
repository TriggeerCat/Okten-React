import {useContext} from "react";
import {ThemeChanger} from "../context/ThemeChanger.tsx";

export const ComponentBA = () => {
    const {isDark, switcher} = useContext(ThemeChanger);

    return (
        <div>
            <p>Component BA</p>
            <button onClick={() => switcher(isDark)} className='text-sm border p-1 m-1'>meow</button>
        </div>
    );
};