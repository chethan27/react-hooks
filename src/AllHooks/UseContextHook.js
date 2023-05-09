import React, { useState } from 'react';
import ContextChild from './ContextChild';

export const ThemeContext = React.createContext();


const UseContextHook = () => {
    const [darkTheme, setDarkTheme] = useState("");

    function toggleTheme() {
        setDarkTheme("bye")
    }

  return (
    <div>
        <button onClick={toggleTheme}>submit</button>
        <ThemeContext.Provider value={darkTheme} >
            <ContextChild />
        </ThemeContext.Provider>
    </div>
  )
}

export default UseContextHook