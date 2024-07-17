import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export function Contexto({ children }) {
    const [theme, setTheme] = useState("light")

    const tema = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, tema}}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;