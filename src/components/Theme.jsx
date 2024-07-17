import React, { useContext } from "react";
import ThemeContext  from "./Contexto";
import "./style.css";

const Theme = () => {
    const { theme, tema } = useContext(ThemeContext);

    return (
        <div className={`container ${theme}`}>
            <h1>Componente</h1>
            <button onClick={tema}>trocar</button>
        </div>
    )
}

export default Theme;