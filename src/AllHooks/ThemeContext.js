import React, {useContext, useState} from "react";
import { ThemeContext } from "./UseContextHook";

export function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState("");

    function toggleTheme() {
        setDarkTheme("bye")
    }

    return (
        <ThemeContext.Provider></ThemeContext.Provider>
    )
}
