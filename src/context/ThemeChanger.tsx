import {createContext} from "react";

type ThemeType = {
    isDark: boolean,
    switcher: (bool: boolean) => void
}

export const init = {
    isDark: false,
    switcher: (bool: boolean) => {
        console.log(bool);
    }
}

export const ThemeChanger = createContext<ThemeType>(init)