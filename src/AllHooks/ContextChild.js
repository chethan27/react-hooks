import React, { useContext } from 'react'
import { ThemeContext } from './UseContextHook'

const ContextChild = () => {

  const darkTheme = useContext(ThemeContext);

  console.log("hi",darkTheme)

  return (
    <div>
        <h1>
            hi
        </h1>
        <span>{darkTheme}</span> 
    </div>
  )
}

export default ContextChild