import {ComponentA} from "./components/ComponentA.tsx";
import {ComponentB} from "./components/ComponentB.tsx";
import {ThemeChanger} from "./context/ThemeChanger.tsx";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<boolean>(true);

    return (
        <div className='text-2xl'>
            <ThemeChanger.Provider value={{
                isDark: theme,
                switcher: (bool: boolean) => {
                    setTheme(!bool)
                    document.querySelector('html')?.setAttribute("theme", theme ? "light" : "dark");
                }
            }}>
                <ComponentA/>
                <ComponentB/>
            </ThemeChanger.Provider>
        </div>
    )
}

export default App
